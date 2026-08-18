import type {
  Metadata,
  Viewport,
} from "next";

import {
  Inter,
  Manrope,
} from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { siteConfig } from "@/lib/seo";

import "./globals.css";

import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    siteConfig.url
  ),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description:
    siteConfig.description,

  
  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: siteConfig.name,

    title: siteConfig.title,

    description:
      siteConfig.description,

    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} bespoke garden rooms`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description:
      siteConfig.description,

    images: [
      "/opengraph-image.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Home Improvement",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,

  themeColor: "#23352B",

  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body
  className={`${manrope.variable} ${inter.variable} antialiased`}
>
  <LocalBusinessSchema />

  <Navbar />

  {children}

  <Footer />
</body>
    </html>
  );
}