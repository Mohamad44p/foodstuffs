import ContactFormEmail from '@/components/emails/ContactFormEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const data = await resend.emails.send({
      from: 'Contact Form <contact@juneidi.ps>',
      to: ['info@juneidi.ps'],
      subject: 'New Contact Form Submission',
      react: ContactFormEmail({ name, email, message }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}