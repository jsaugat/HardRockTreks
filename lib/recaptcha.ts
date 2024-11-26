// lib/recaptcha.ts
export async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await response.json();
  return {
    success: data.success,
    score: data.score, // Score between 0 and 1 (1 is very likely a good interaction)
    action: data.action,
  };
}