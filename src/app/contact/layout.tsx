import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Stortford Garden Rooms",

  description:
    "Contact Stortford Garden Rooms to discuss a bespoke garden room project in Essex or Hertfordshire, or send us a quick question about your ideas.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact Stortford Garden Rooms | Bespoke Garden Rooms",

    description:
      "Get in touch to discuss your bespoke garden room project across Essex, Hertfordshire and surrounding areas.",

    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}