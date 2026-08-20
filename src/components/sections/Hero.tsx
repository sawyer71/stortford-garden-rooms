import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#23352B]">
      {/* Background Image */}

      <Image
        src="/images/hero/garden-room-hero-v2.png"
        alt="Contemporary bespoke garden room with large glazed doors"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overall Dark Overlay */}

      <div className="absolute inset-0 bg-black/30" />

      {/* Top Gradient */}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Bottom Gradient */}

      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#23352B]/95 via-[#23352B]/35 to-transparent" />

      {/* Hero Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/80">
            Bespoke Garden Rooms · Bishop&apos;s Stortford · Stansted Mountfitchet
          </p>

          {/* Main Heading */}

          <h1 className="max-w-4xl text-[2.75rem] font-light leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            More space.
            <br />
            More possibilities.S
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
  Bespoke timber-framed garden rooms designed and built in Bishop&apos;s
  Stortford, Stansted and the surrounding areas — creating beautiful spaces
  to work, relax, entertain and live that feel like a natural extension of
  your home.
</p>

          {/* CTA */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/project-planner"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition duration-300 hover:scale-[1.03] hover:bg-[#F7F5F2]"
            >
              Start Your Project
            </Link>

            <Link
              href="/garden-rooms"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition duration-300 hover:border-white hover:bg-white/10"
            >
              Explore Garden Rooms
            </Link>
          </div>

          {/* Supporting Trust Line */}

<div className="mt-8 text-sm text-white/60">
  {/* Mobile */}
  <div className="flex flex-col items-center gap-2 sm:hidden">
    <div className="flex items-center justify-center gap-3">
      <span>Fully bespoke</span>
      <span className="text-white/30">|</span>
      <span>Timber-framed</span>
    </div>

    <div className="flex items-center justify-center gap-3">
      <span>Cedar or composite cladding</span>
      <span className="text-white/30">|</span>
      <span>Family-run & local</span>
    </div>
  </div>

  {/* Tablet / Desktop */}
  <div className="hidden flex-wrap items-center gap-x-6 gap-y-3 sm:flex">
    <span>Fully bespoke</span>
    <span>•</span>
    <span>Timber-framed</span>
    <span>•</span>
    <span>Cedar or composite cladding</span>
    <span>•</span>
    <span>Family-run & local</span>
  </div>
</div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <a
        href="#lifestyle"
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/70 transition hover:text-white md:flex"
      >
        <span>Scroll to explore</span>

        <span className="h-12 w-px bg-white/40" />
      </a>
    </section>
  );
}