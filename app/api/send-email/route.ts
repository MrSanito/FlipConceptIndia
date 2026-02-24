import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_5LGL8wPT_MjbXsxEvsqAszRtPkgPH23Pg');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Flip Concept India <onboarding@resend.dev>', // Update this with your verified domain later if you want
      to: ['1988krishnani@gmail.com'], // Send to the admin's email or the test email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (data.error) {
       return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Error occurred while sending email' },
      { status: 500 }
    );
  }
}
