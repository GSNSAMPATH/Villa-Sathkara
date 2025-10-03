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
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // where you want to receive emails
      subject: subject || "Reservation Inquiry",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
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
