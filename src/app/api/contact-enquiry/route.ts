import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const {
  name,
  email,
  phone,
  message,
  faxnumber,
} = body;

if (faxnumber?.trim()) {
  return NextResponse.json({
    success: true,
  });
}

    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete your name, email address and message.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } =
      await resend.emails.send({
        from:
          process.env.CONTACT_FROM_EMAIL ||
          "Stortford Garden Rooms <onboarding@resend.dev>",

        to:
          process.env.CONTACT_TO_EMAIL ||
          "chrissawyer1@hotmail.co.uk",

        replyTo: email.trim(),

        subject: `Website enquiry from ${name.trim()}`,

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #23352B;">
            <h2 style="margin-bottom: 24px;">
              New Stortford Garden Rooms Enquiry
            </h2>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name.trim())}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email.trim())}
            </p>

            <p>
              <strong>Telephone:</strong>
              ${
                phone?.trim()
                  ? escapeHtml(phone.trim())
                  : "Not provided"
              }
            </p>

            <hr
              style="border: 0; border-top: 1px solid #ddd; margin: 28px 0;"
            />

            <p>
              <strong>Message:</strong>
            </p>

            <p style="white-space: pre-line; line-height: 1.6;">
              ${escapeHtml(message.trim())}
            </p>
          </div>
        `,
      });

    if (error) {
      console.error(
        "Resend email error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your message. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    console.log(
      "Contact enquiry sent:",
      data?.id
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Contact enquiry error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't send your message. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}