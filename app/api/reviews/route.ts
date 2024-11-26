// app/api/reviews/route.ts
import { NextResponse } from 'next/server'
import { createReview, getApprovedReviews } from '@/lib/db/reviews'
import { ReviewSchema } from '@/lib/zod/review'

export async function GET() {
  try {
    const reviews = await getApprovedReviews()
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log({ body })

    // Validate the request body
    const validatedBody = ReviewSchema.safeParse(body)
    if (!validatedBody.success) {
      console.log("Validation error")
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }
    console.log({ validatedData: validatedBody.data })

    // Create review
    const review = await createReview(validatedBody.data)

    return NextResponse.json({
      message: 'Review submitted successfully and pending approval',
      review
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 400 }
    )
  }
}