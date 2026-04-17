import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type LeadPayload = {
  name?: string;
  whatsapp?: string;
  idea?: string;
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
            "Lead notifications are not configured yet. Please set server environment variables.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as LeadPayload;
    const name = (body.name || "").trim();
    const whatsapp = (body.whatsapp || "").trim();
    const idea = (body.idea || "").trim();

    if (!name || !whatsapp) {
      return NextResponse.json(
        { error: "Name and WhatsApp number are required." },
        { status: 400 },
      );
    }

    const resend = new Resend(resendApiKey);

    const submittedAt = new Date().toISOString();

    await resend.emails.send({
      from: leadsFromEmail,
      to: leadsToEmail,
      subject: `New discovery call request from ${name}`,
      html: `
        <h2>New discovery call lead</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
        <p><strong>Idea:</strong> ${escapeHtml(idea || "Not provided")}</p>
        <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
      `,
      text: [
        "New discovery call lead",
        `Name: ${name}`,
        `WhatsApp: ${whatsapp}`,
        `Idea: ${idea || "Not provided"}`,
        `Submitted at: ${submittedAt}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Could not submit form right now. Please try again." },
      { status: 500 },
    );
  }
}
