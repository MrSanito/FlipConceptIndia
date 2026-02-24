"use server";

import { Resend } from 'resend';

// Initialize Resend with the provided API Key
const resend = new Resend(process.env.RESEND_API_KEY || 're_5LGL8wPT_MjbXsxEvsqAszRtPkgPH23Pg');

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  productName?: string;
}

interface ActionState {
  success: boolean;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<ActionState> {
  // 1. Validate Input
  if (!data.name || !data.email || !data.phone || !data.message) {
    return { success: false, message: "Missing required fields." };
  }

  try {
    // 2. Send Email using Resend
    const result = await resend.emails.send({
      from: 'Flip Concept India <onboarding@resend.dev>', // Update this with your verified domain
      to: ['1988krishnani@gmail.com'], // Update to admin's email or client email where inquiries should go
      subject: `New Inquiry: ${data.productName || "General Contact"}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        
        Message:
        ${data.message}
      `,
      html: `
        <h3>New Website Inquiry</h3>
        <p><strong>Product:</strong> ${data.productName || "General Contact"}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (result.error) {
      console.error("Resend API Error:", result.error);
      return { success: false, message: result.error.message || "Failed to send email." };
    }

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, message: "Failed to send email. Please try again." };
  }
}
