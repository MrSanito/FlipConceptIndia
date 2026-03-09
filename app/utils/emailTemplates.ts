export interface InquiryEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  productName?: string;
}

export interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const getInquiryEmailHtml = (data: InquiryEmailData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; padding: 30px; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: #1e3a8a; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
    .header p { margin: 10px 0 0 0; color: #93c5fd; font-size: 14px; }
    .content { padding: 40px 30px; }
    .field { margin-bottom: 25px; border-bottom: 1px solid #f3f4f6; padding-bottom: 20px; }
    .label { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px; }
    .value { font-size: 16px; color: #111827; font-weight: 500; }
    .value a { color: #2563eb; text-decoration: none; }
    .message-box { background: #f8fafc; padding: 20px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #334155; margin-top: 10px; border: 1px solid #e2e8f0; }
    .footer { background: #f8fafc; padding: 25px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Product Inquiry</h1>
      <p>Flip Concept India Notification</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Product / Interest</div>
        <div class="value" style="color: #1e40af; font-size: 18px;">${data.productName || "General Contact"}</div>
      </div>
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>
      <div class="field" style="border-bottom: none; margin-bottom: 0;">
        <div class="label">Client Message</div>
        <div class="message-box">${data.message.replace(/\n/g, "<br/>")}</div>
      </div>
    </div>
    <div class="footer">
      This message was sent from the Inquire Form on your website. <br>Please reply directly to the client's email address above.
    </div>
  </div>
</body>
</html>
`;

export const getContactEmailHtml = (data: ContactEmailData) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; padding: 30px; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: #1e3a8a; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
    .header p { margin: 10px 0 0 0; color: #93c5fd; font-size: 14px; }
    .content { padding: 40px 30px; }
    .field { margin-bottom: 25px; border-bottom: 1px solid #f3f4f6; padding-bottom: 20px; }
    .label { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px; }
    .value { font-size: 16px; color: #111827; font-weight: 500; }
    .value a { color: #2563eb; text-decoration: none; }
    .message-box { background: #f8fafc; padding: 20px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #334155; margin-top: 10px; border: 1px solid #e2e8f0; }
    .footer { background: #f8fafc; padding: 25px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Contact Form Submission</h1>
      <p>Flip Concept India Message Data</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      <div class="field" style="border-bottom: none; margin-bottom: 0;">
        <div class="label">Message Subject</div>
        <div class="value" style="color: #1e40af; font-size: 18px; margin-bottom: 12px;">${data.subject}</div>
        <div class="label">Message Content</div>
        <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      This message was sent from the general Contact Form on your website.<br>Please reply directly to the client's email address above.
    </div>
  </div>
</body>
</html>
`;
