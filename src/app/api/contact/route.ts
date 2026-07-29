import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, methods, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
   from: "Kanaria Developers <noreply@kanariadevelopers.com>",
    to: "info@kanariadevelopers.com",
    replyTo: email,
    subject: `New Inquiry — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1a1a1a;">
        <h2 style="border-bottom: 1px solid #eee; padding-bottom: 12px;">New Inquiry from Kanaria Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 140px;">Full Name</td>
            <td style="padding: 8px 0; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 8px 0; color: #666;">Phone</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>` : ""}
          ${methods?.length ? `<tr>
            <td style="padding: 8px 0; color: #666;">Preferred Contact</td>
            <td style="padding: 8px 0;">${methods.join(", ")}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f9f9f9; border-left: 3px solid #c4b5a0;">
          <p style="margin: 0; color: #444; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">Sent via kanariadevelopers.com</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
