import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

const quickLinks = [
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

export default function Footer() {
  return (
    <footer className="bg-[#23352B] text-white">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Brand */}

            <div className="lg:col-span-5">
              <Link
                href="/"
                aria-label="Stortford Garden Rooms home"
                className="inline-flex"
              >
                <Image
                  src="/branding/stortford-garden-rooms-logo-horizontal-light.svg"
                  alt="Stortford Garden Rooms"
                  width={1200}
                  height={260}
                  className="h-auto w-[260px] md:w-[300px]"
                />
              </Link>

              <p className="mt-6 max-w-md text-base leading-7 text-white/65">
                Bespoke garden rooms designed around your home, your garden
                and the way you want to live.
              </p>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                Based in Stansted Mountfitchet and serving homeowners across
                Essex and Hertfordshire.
              </p>
            </div>

            {/* Quick Links */}

            <div className="lg:col-span-3 lg:col-start-7">
              <p className="text-xs uppercase tracking-[0.22em] text-[#D8D2C7]">
                Explore
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-fit text-sm text-white/65 transition duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}

            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.22em] text-[#D8D2C7]">
                Contact
              </p>

              <div className="mt-5 space-y-4 text-sm text-white/65">
                <p>
                  Stansted Mountfitchet
                  <br />
                  Essex
                </p>

                <a
                  href="mailto:hello@stortfordgardenrooms.co.uk"
                  className="block w-fit transition duration-300 hover:text-white"
                >
                  hello@stortfordgardenrooms.co.uk
                </a>

                <a
                  href="tel:+441279000000"
                  className="block w-fit transition duration-300 hover:text-white"
                >
                  01279 000000
                </a>
              </div>

              <Link
                href="/project-planner"
                className="group mt-7 inline-flex items-center gap-3 text-sm font-medium text-white"
              >
                Start Your Project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Stortford Garden Rooms. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/privacy"
                className="transition hover:text-white/70"
              >
                Privacy Policy
              </Link>

              <Link
                href="/cookies"
                className="transition hover:text-white/70"
              >
                Cookie Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white/70"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}