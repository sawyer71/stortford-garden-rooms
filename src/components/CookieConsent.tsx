"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const COOKIE_CONSENT_KEY = "sgr_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(
      COOKIE_CONSENT_KEY
    );

    if (!savedConsent) {
      setVisible(true);
      return;
    }

    if (savedConsent === "accepted") {
      updateGoogleConsent("granted");
    }
  }, []);

  function updateGoogleConsent(
    analyticsStorage: "granted" | "denied"
  ) {
    window.dataLayer = window.dataLayer || [];

    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };

    window.gtag("consent", "update", {
      analytics_storage: analyticsStorage,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  function acceptAnalytics() {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      "accepted"
    );

    updateGoogleConsent("granted");
    setVisible(false);
  }

  function rejectAnalytics() {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      "rejected"
    );

    updateGoogleConsent("denied");
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-[#23352B] px-5 py-5 text-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm leading-6 text-white/75">
            We use analytics cookies to understand how visitors
            use our website and improve the experience.{" "}
            <Link
              href="/cookies"
              className="text-white underline underline-offset-4 transition hover:text-[#A7744A]"
            >
              Cookie Policy
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={rejectAnalytics}
            className="rounded-full border border-white/30 px-5 py-3 text-sm transition hover:border-white hover:bg-white/10"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={acceptAnalytics}
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#23352B] transition hover:bg-[#F5F3EF]"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}