import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP: { host, port, auth }
      auth: {
        user: process.env.EMAIL_USER || "sumalnadira123@gmail.com", // your Gmail address
        pass: process.env.EMAIL_PASS || "pjub knxe hgnf rzmm", // app password
      },
    });

    // Email options
    // const mailOptions = {
    //   from: email,
    //   to: process.env.EMAIL_TO, // where you want to receive emails
    //   subject: "Web Contact Form Submission",
    //   text: `
    //     Name: ${firstName} ${lastName}
    //     Email: ${email}
    //     Phone: ${phone}
        
    //     Message:
    //     ${message}
    //   `,
    // };

const mailOptions = {
  from: `"${firstName} ${lastName}" <${email}>`,
  to: process.env.EMAIL_TO,
  subject: `📨 New Message from ${firstName} ${lastName} via Website Contact Form`,
  html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; padding: 40px;">
      <div style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background-color: #131414ff; padding: 20px; text-align: center; color: white;">
          <img src="https://res.cloudinary.com/diatamf9x/image/upload/v1759466793/Layer_1_rd0euk.png" alt="Company Logo" style="width: 250px; margin-bottom: 10px;" />
          <h1 style="margin: 0; font-size: 20px;">New Contact Form Submission</h1>
        </div>

        <!-- Body -->
        <div style="padding: 30px;">
          <h2 style="color: #131414ff; margin-top: 0;">Contact Details</h2>
          <table width="100%" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
            <tr>
              <td style="font-weight: bold; width: 150px;">Name:</td>
              <td>${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Email:</td>
              <td><a href="mailto:${email}" style="color: #0047AB;">${email}</a></td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Phone:</td>
              <td>${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Subject:</td>
              <td>${subject || "Not provided"}</td>
            </tr>
          </table>

          <h2 style="color: #131414ff; margin-top: 30px;">Message</h2>
          <div style="background: #f9f9f9; border-left: 4px solid #131414ff; padding: 15px; margin-top: 10px; line-height: 1.6; color: #333;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f0f0f0; padding: 20px; text-align: center; font-size: 12px; color: #777;">
          <p style="margin: 0;">This message was sent from your website contact form.</p>
          <p style="margin: 5px 0;">© ${new Date().getFullYear()} Villa Sathkara. All rights reserved.</p>
          <div style="margin-top: 10px;">
            <a href="https://www.villasathkara.com" style="color: #0047AB; text-decoration: none; margin: 0 5px;">Website</a> |
            <a href="villasathkara@gmail.com" style="color: #0047AB; text-decoration: none; margin: 0 5px;">Email Us</a> |
            <a href="https://linkedin.com/company/yourcompany" style="color: #0047AB; text-decoration: none; margin: 0 5px;">LinkedIn</a>
          </div>
        </div>

      </div>
    </div>
  `,
};

    console.log(mailOptions);
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
