/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "almamon757@gmail.com",
      subject: "নতুন Contact Message এসেছে",
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden;">
    
    <div style="background:#55BEEF; padding:16px; text-align:center;">
      <h2 style="color:#ffffff; margin:0;">নতুন মেসেজ এসেছে</h2>
    </div>

    <div style="padding:20px; color:#333;">
      <p style="margin:8px 0;"><strong>নাম:</strong> ${name}</p>
      <p style="margin:8px 0;"><strong>ইমেইল:</strong> ${email}</p>
      <p style="margin:8px 0;"><strong>ফোন:</strong> ${phone}</p>
      <p style="margin:8px 0;"><strong>বার্তা:</strong></p>

      <div style="background:#f9fafb; padding:12px; border-radius:8px; margin-top:8px; line-height:1.6;">
        ${message}
      </div>
    </div>

    <div style="padding:12px; text-align:center; font-size:12px; color:#888; border-top:1px solid #eee;">
      পাঠানো হয়েছে travelbox থেকে
    </div>

  </div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
