"use server";

import { Resend } from 'resend';
import { getInquiryEmailHtml, InquiryEmailData } from '../utils/emailTemplates';

// Initialize Resend with the provided API Key
const resend = new Resend(process.env.RESEND_API_KEY || 're_5LGL8wPT_MjbXsxEvsqAszRtPkgPH23Pg');

interface ActionState {
  success: boolean;
  message: string;
}

export async function sendEmail(data: InquiryEmailData): Promise<ActionState> {
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
      html: getInquiryEmailHtml(data),
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
