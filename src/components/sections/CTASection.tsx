import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#23352B]">
      {/* Background Image */}

      <Image
        src="/images/hero/garden-room-hero-v2.png"
        alt="Contemporary bespoke garden room by Stortford Garden Rooms"
        fill
        className="object-cover object-center"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#23352B]/75" />

      {/* Subtle Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#23352B]/90 via-[#23352B]/60 to-black/40" />

      {/* Content */}

      <Container>
        <div className="relative z-10 flex min-h-[650px] items-center justify-center py-24 text-center md:min-h-[700px]">
          <Reveal className="max-w-4xl">
            {/* Eyebrow */}

            <p className="text-sm uppercase tracking-[0.35em] text-white/70">
              It Starts With An Idea
            </p>

            {/* Heading */}

            <h2 className="mt-6 text-5xl font-light leading-[1.05] text-white md:text-7xl lg:text-8xl">
              What could your
              <br />
              space become?
            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
              You don't need to have every detail figured out. Tell us how
              you'd like to use the space, what you're imagining and where
              you're based — and we'll help you explore what's possible.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/project-planner"
                className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition duration-300 hover:scale-[1.03] hover:bg-[#F7F5F2]"
              >
                <span>Start Your Project</span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/garden-rooms"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition duration-300 hover:border-white hover:bg-white/10"
              >
                Explore Garden Rooms
              </Link>
            </div>

            {/* Reassurance */}

            <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-white/50">
              Whether you're ready to begin or simply exploring an idea, the
              first step is just a conversation.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}