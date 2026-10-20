import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail } from "@/lib/utils";

type SubscribePayload = {
  name?: string;
  whatsapp?: string;
  email?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const leadsToEmail = process.env.LEADS_TO_EMAIL;
    const leadsFromEmail = process.env.LEADS_FROM_EMAIL;

    if (!resendApiKey || !leadsToEmail || !leadsFromEmail) {
      return NextResponse.json(
        {
          error:
            "Signups are not configured yet. Please set server environment variables.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as SubscribePayload;
    const name = (body.name || "").trim();
    const whatsapp = (body.whatsapp || "").trim();
    const email = (body.email || "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email address are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resend = new Resend(resendApiKey);
    const submittedAt = new Date().toISOString();

    await resend.emails.send({
      from: leadsFromEmail,
      to: leadsToEmail,
      replyTo: email,
      subject: `New AI prompts subscriber: ${name}`,
      html: `
        <h2>New AI prompts subscriber</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp || "Not provided")}</p>
        <p><strong>Source:</strong> /resources/ai-prompts</p>
        <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
      `,
      text: [
        "New AI prompts subscriber",
        `Name: ${name}`,
        `Email: ${email}`,
        `WhatsApp: ${whatsapp || "Not provided"}`,
        "Source: /resources/ai-prompts",
        `Submitted at: ${submittedAt}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe submission error:", error);
    return NextResponse.json(
      { error: "Could not sign you up right now. Please try again." },
      { status: 500 },
    );
  }
}
