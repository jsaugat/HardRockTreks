import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body
    const { name, email, message } = await request.json();

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ["jsaugat.dev@gmail.com"],
      subject: "New customer inquiry from 'HARD ROCK TREKS & EXPEDITIONS' website.",
      react: EmailTemplate({ name, email, message }), // Use the parsed data in the email template
    });

    // Handle any error returned from the Resend API
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    // Return the successful response
    console.log('Email sent:', data);
    return NextResponse.json(data);
  } catch (error: any) {
    // Log the error for debugging purposes
    console.error('Error:', error);

    // Return an error response in case something goes wrong
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}