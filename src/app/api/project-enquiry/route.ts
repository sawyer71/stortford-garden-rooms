import { NextResponse } from "next/server";
import { Resend } from "resend";

type ProjectEnquiry = {
  use: string;
  size: string;
  features: string[];
  budget: string;
  timeframe: string;
  postcode: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  consent: boolean;
};

function clean(value: unknown, maxLength = 2000): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const enquiryEmail = process.env.ENQUIRY_EMAIL;

    if (!apiKey || !enquiryEmail) {
      console.error("Missing Resend environment variables.");

      return NextResponse.json(
        {
          success: false,
          message:
            "The enquiry service is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as Partial<ProjectEnquiry>;

    const enquiry: ProjectEnquiry = {
      use: clean(body.use, 100),
      size: clean(body.size, 100),
      features: Array.isArray(body.features)
        ? body.features
            .filter(
              (feature): feature is string =>
                typeof feature === "string"
            )
            .map((feature) => clean(feature, 100))
            .slice(0, 20)
        : [],
      budget: clean(body.budget, 100),
      timeframe: clean(body.timeframe, 100),
      postcode: clean(body.postcode, 30),
      name: clean(body.name, 120),
      email: clean(body.email, 200),
      phone: clean(body.phone, 50),
      notes: clean(body.notes, 3000),
      consent: body.consent === true,
    };

    if (
      !enquiry.use ||
      !enquiry.size ||
      !enquiry.budget ||
      !enquiry.timeframe ||
      !enquiry.postcode ||
      !enquiry.name ||
      !enquiry.email ||
      !enquiry.phone
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(enquiry.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (!enquiry.consent) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please confirm that we may use your details to respond to your enquiry.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(enquiry.name);
    const safeEmail = escapeHtml(enquiry.email);
    const safePhone = escapeHtml(enquiry.phone);
    const safePostcode = escapeHtml(enquiry.postcode);
    const safeUse = escapeHtml(enquiry.use);
    const safeSize = escapeHtml(enquiry.size);
    const safeBudget = escapeHtml(enquiry.budget);
    const safeTimeframe = escapeHtml(enquiry.timeframe);
    const safeNotes = enquiry.notes
      ? escapeHtml(enquiry.notes).replaceAll("\n", "<br />")
      : "No additional notes supplied.";

    const safeFeatures =
      enquiry.features.length > 0
        ? enquiry.features
            .map(
              (feature) =>
                `<li style="margin-bottom:6px;">${escapeHtml(
                  feature
                )}</li>`
            )
            .join("")
        : "<li>No specific features selected.</li>";

    const subject = `New Garden Room Enquiry — ${enquiry.postcode} — ${enquiry.budget}`;

    const { data, error } = await resend.emails.send({
      from: "Stortford Garden Rooms <website@stortfordgardenrooms.co.uk>",

to: [enquiryEmail],

      replyTo: enquiry.email,

      subject,

      html: `
        <div style="
          max-width:680px;
          margin:0 auto;
          padding:32px;
          font-family:Arial,Helvetica,sans-serif;
          color:#23352B;
          background:#F7F5F2;
        ">

          <p style="
            margin:0 0 8px;
            font-size:12px;
            letter-spacing:2px;
            text-transform:uppercase;
            color:#A7744A;
          ">
            Stortford Garden Rooms
          </p>

          <h1 style="
            margin:0 0 32px;
            font-size:32px;
            font-weight:400;
          ">
            New Garden Room Enquiry
          </h1>

          <div style="
            background:#ffffff;
            padding:28px;
            margin-bottom:20px;
          ">

            <h2 style="
              margin:0 0 20px;
              font-size:18px;
              font-weight:600;
            ">
              Customer Details
            </h2>

            <p><strong>Name:</strong> ${safeName}</p>

            <p>
              <strong>Email:</strong>
              <a href="mailto:${safeEmail}">
                ${safeEmail}
              </a>
            </p>

            <p>
              <strong>Telephone:</strong>
              <a href="tel:${safePhone}">
                ${safePhone}
              </a>
            </p>

            <p>
              <strong>Postcode:</strong>
              ${safePostcode}
            </p>

          </div>

          <div style="
            background:#ffffff;
            padding:28px;
            margin-bottom:20px;
          ">

            <h2 style="
              margin:0 0 20px;
              font-size:18px;
              font-weight:600;
            ">
              Project Details
            </h2>

            <p>
              <strong>Intended use:</strong>
              ${safeUse}
            </p>

            <p>
              <strong>Approximate size:</strong>
              ${safeSize}
            </p>

            <p>
              <strong>Budget:</strong>
              ${safeBudget}
            </p>

            <p>
              <strong>Timeframe:</strong>
              ${safeTimeframe}
            </p>

            <p style="margin-bottom:8px;">
              <strong>Selected features:</strong>
            </p>

            <ul>
              ${safeFeatures}
            </ul>

          </div>

          <div style="
            background:#ffffff;
            padding:28px;
          ">

            <h2 style="
              margin:0 0 20px;
              font-size:18px;
              font-weight:600;
            ">
              Customer Notes
            </h2>

            <p style="
              line-height:1.7;
              margin:0;
            ">
              ${safeNotes}
            </p>

          </div>

          <p style="
            margin-top:24px;
            font-size:12px;
            color:#777777;
          ">
            This enquiry was submitted through the
            Stortford Garden Rooms Project Planner.
          </p>

        </div>
      `,

      text: `
NEW GARDEN ROOM ENQUIRY

CUSTOMER DETAILS

Name: ${enquiry.name}
Email: ${enquiry.email}
Telephone: ${enquiry.phone}
Postcode: ${enquiry.postcode}


PROJECT DETAILS

Intended use: ${enquiry.use}
Approximate size: ${enquiry.size}
Budget: ${enquiry.budget}
Timeframe: ${enquiry.timeframe}

Features:
${
  enquiry.features.length
    ? enquiry.features.map((feature) => `- ${feature}`).join("\n")
    : "- No specific features selected"
}


CUSTOMER NOTES

${enquiry.notes || "No additional notes supplied."}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your enquiry. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Project enquiry error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your enquiry.",
      },
      { status: 500 }
    );
  }
}