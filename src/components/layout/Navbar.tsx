"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Garden Rooms",
    href: "/garden-rooms",
  },
  {
    name: "Inspiration",
    href: "/inspiration",
  },
  {
    name: "Our Process",
    href: "/process",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar appearance after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Allow Escape to close the mobile menu.
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-black/5 bg-[#F7F5F2]/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
          {/* Brand */}

<Link
  href="/"
  aria-label="Stortford Garden Rooms"
  onClick={closeMobileMenu}
  className="relative z-50 flex items-center"
>
  <Image
    src={
      mobileMenuOpen || scrolled
        ? "/branding/stortford-garden-rooms-logo-horizontal.svg"
        : "/branding/stortford-garden-rooms-logo-horizontal-light.svg"
    }
    alt="Stortford Garden Rooms"
    width={920}
    height={180}
    priority
    className="h-auto w-[240px] transition-opacity duration-300"
  />
</Link>

          {/* Desktop Navigation */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7744A] focus-visible:ring-offset-4 ${
                  scrolled
                    ? "text-[#2A2A2A] hover:text-[#A7744A]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Main CTA */}

            <Link
              href="/project-planner"
              className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7744A] focus-visible:ring-offset-4 ${
                scrolled
                  ? "bg-[#23352B] text-white hover:bg-[#314936]"
                  : "bg-white text-[#23352B] hover:bg-[#F7F5F2]"
              }`}
            >
              Start Your Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`relative z-50 flex h-11 w-11 items-center justify-center lg:hidden rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7744A] ${
              mobileMenuOpen || scrolled
                ? "text-[#23352B]"
                : "text-white"
            }`}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen
                    ? "top-2.5 rotate-45"
                    : "top-1"
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 block h-px w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen
                    ? "scale-x-0 opacity-0"
                    : "scale-x-100 opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 block h-px w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen
                    ? "top-2.5 -rotate-45"
                    : "top-4"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}

      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-40 bg-[#F7F5F2] transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col px-8 pb-8 pt-32">
          <nav
            aria-label="Mobile navigation"
            className="my-auto flex flex-col"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className={`border-b border-[#23352B]/10 py-4 text-3xl font-light leading-tight text-[#23352B] transition-all duration-500 sm:text-4xl ${
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${index * 60}ms`
                    : "0ms",
                }}
              >
                <span className="flex items-center justify-between">
                  {item.name}

                  <span className="text-lg text-[#A7744A]">
                    →
                  </span>
                </span>
              </Link>
            ))}

            {/* Mobile CTA */}

            <div
              className={`mt-8 transition-all duration-500 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${navigation.length * 60}ms`
                  : "0ms",
              }}
            >
              <Link
                href="/project-planner"
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="inline-flex items-center gap-4 rounded-full bg-[#23352B] px-8 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#314936]"
              >
                <span>Start Your Project</span>

                <span>→</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Footer */}

          <div className="border-t border-[#23352B]/10 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#A7744A]">
              Based in
            </p>

            <p className="mt-2 text-sm text-[#2A2A2A]/60">
              Stansted Mountfitchet · Essex
            </p>
          </div>
        </div>
      </div>
    </>
  );
}