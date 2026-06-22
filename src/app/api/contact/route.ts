import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  details?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, details } = body;

  if (!name?.trim() || !email?.trim() || !details?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and project details are required." },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  // ───────────────────────────────────────────────────────────────────
  // TODO: wire this up to your channel of choice, e.g.:
  //   • Resend / Postmark / SendGrid  → send yourself an email
  //   • Slack / Discord webhook       → notify your team
  //   • Airtable / Notion / a CRM     → create a lead record
  //
  // Example with Resend (npm i resend, set RESEND_API_KEY):
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Codexa <leads@codexa.dev>",
  //     to: "hello@codexa.dev",
  //     subject: `New enquiry from ${name}`,
  //     text: JSON.stringify(body, null, 2),
  //   });
  // ───────────────────────────────────────────────────────────────────

  // For now we just log on the server so the form works out of the box.
  console.log("New contact enquiry:", body);

  return NextResponse.json({ ok: true }, { status: 200 });
}
