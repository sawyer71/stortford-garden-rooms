import type {
  Metadata,
  Viewport,
} from "next";

import {
  Inter,
  Manrope,
} from "next/font/google";

import Script from "next/script";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

import { siteConfig } from "@/lib/seo";

import "./globals.css";

import CookieConsent from "@/components/CookieConsent";

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
        {/* Google Consent Mode — default to denied */}
        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VK39SYHQEY"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-VK39SYHQEY');
          `}
        </Script>

        <LocalBusinessSchema />

        <Navbar />

        {children}

        <Footer />

        <CookieConsent />
      </body>
    </html>
  );
}