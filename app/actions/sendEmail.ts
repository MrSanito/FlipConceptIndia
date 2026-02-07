"use server";

import nodemailer from "nodemailer";

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

  // 2. Check Configuration
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  // If configuration is missing, we can simulate success for development 
  // or return an error depending on preference. For now, we'll return a specific message.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn("SMTP Configuration missing. Email not sent.");
    return { 
      success: true, 
      message: "Simulation: Email 'sent' (SMTP not configured)." 
    };
  }

  try {
    // 3. Create Transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // 4. Send Email
    await transporter.sendMail({
      from: `"Flip Concept Website" <${SMTP_USER}>`, // Sender address
      to: CONTACT_EMAIL || SMTP_USER, // List of receivers
      subject: `New Inquiry: ${data.productName || "General Contact"}`, // Subject line
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        
        Message:
        ${data.message}
      `, // plain text body
      html: `
        <h3>New Website Inquiry</h3>
        <p><strong>Product:</strong> ${data.productName || "General Contact"}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `, // html body
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, message: "Failed to send email. Please try again." };
  }
}
