import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
export const metadata: Metadata = {
  title: "About Stortford Garden Rooms",

  description:
    "Meet Stortford Garden Rooms, a local garden room company based in Stansted Mountfitchet, designing and building bespoke spaces across Essex and Hertfordshire.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About Stortford Garden Rooms | Bespoke Garden Rooms",

    description:
      "A local, personal approach to designing and building bespoke garden rooms across Essex and Hertfordshire.",

    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}

      <section className="bg-[#23352B] pb-20 pt-36 text-white md:pb-24 md:pt-44">
        <Container>
          <Reveal className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#D8D2C7]">
              Our Story
            </p>

            <h1 className="mt-6 text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              It started with
              <br />
              one garden room.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              What began as a project to create more usable space at home
              developed into an idea for helping others do exactly the same.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* WHERE IT BEGAN */}

      <section className="bg-[#F7F5F2] py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Where It Began
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-6xl">
                Sometimes the best
                <br />
                ideas start at home.
              </h2>
            </Reveal>

            <Reveal
  delay={0.15}
  className="lg:col-span-6 lg:col-start-7"
>
  <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70 md:mt-8">
    Stortford Garden Rooms began with a project much closer to home —
    our own.
  </p>

  <p className="mt-4 text-base leading-8 text-[#2A2A2A]/70 md:mt-6">
    We originally built a garden room because we wanted more usable
    space without extending the house. But living with it showed us
    just how much difference a properly designed room at the end of
    the garden could make.
  </p>

  <p className="mt-4 text-base leading-8 text-[#2A2A2A]/70 md:mt-6">
    It wasn&apos;t simply extra square footage. It created separation
    from the house and gave us a space that could have a purpose of
    its own.
  </p>

  <p className="mt-4 text-base leading-8 text-[#2A2A2A]/70 md:mt-6">
    That first room sparked the idea behind Stortford Garden Rooms:
    to help other homeowners create beautifully considered spaces
    designed around the way they actually want to live.
  </p>
</Reveal>
          </div>
        </Container>
      </section>

      {/* FEATURE IMAGE */}

      <section className="bg-[#F7F5F2] pb-16 md:pb-24">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/8] overflow-hidden rounded-3xl bg-[#D8D2C7]">
              <Image
                src="/images/hero/garden-room-hero-v2.png"
                alt="Contemporary bespoke garden room"
                fill
                className="object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* WHO WE ARE TODAY */}

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
            <Reveal direction="left" className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#D8D2C7] lg:aspect-[4/5]">
                <Image
                  src="/images/construction/garden-room-timber-frame.png"
                  alt="Garden room being built by Stortford Garden Rooms"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.15}
              className="lg:col-span-5 lg:col-start-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Who We Are Today
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-6xl">
                A local business
                <br />
                with a personal approach.
              </h2>

              <p className="mt-8 text-lg leading-8 text-[#2A2A2A]/70">
  Today, Stortford Garden Rooms creates bespoke garden rooms for
  homeowners who want something designed around their home, their
  garden and the way they want to use the space.
</p>

<p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
  We are deliberately a small, local business. From the first
  conversation through to the build itself, you deal directly with
  the people involved in your project. It keeps communication simple,
  decisions straightforward and gives every room the attention it
  deserves.
</p>

<p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
  We do not believe in a one-size-fits-all approach. Every garden,
  home and project is different, so we take the time to understand
  what you need before designing a room around it — with thoughtful
  design, quality materials and careful construction at the heart of
  every project.
</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* LOCAL */}

      <section className="bg-[#23352B] py-16 text-white md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
                Close To Home
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
                Based in
                <br />
                Stansted Mountfitchet.
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-light leading-9 text-white md:text-2xl">
  Based in Stansted Mountfitchet, we design and build bespoke garden
  rooms for homeowners across Essex, Hertfordshire and the surrounding
  area.
</p>

<p className="mt-8 text-base leading-8 text-white/65">
  We regularly work in Bishop&apos;s Stortford, Saffron Walden, Great
  Dunmow, Takeley, Sawbridgeworth and Harlow, as well as the surrounding
  towns and villages across the Essex and Hertfordshire border.
</p>

<p className="mt-6 text-base leading-8 text-white/65">
  Keeping our work relatively close to home means we can stay personally
  involved throughout each project — from the first conversation and
  site visit through to construction and handover.
</p>

              <Link
                href="/project-planner"
                className="group mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white"
              >
                <span>Discuss Your Project</span>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Start your bespoke garden room project"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#23352B]/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#23352B]/95 via-[#23352B]/65 to-black/30" />

        <Container>
          <div className="relative z-10 flex min-h-[520px] items-center justify-center py-20 text-center md:min-h-[580px]">
            <Reveal className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Your Story Starts Here
              </p>

              <h2 className="mt-6 text-5xl font-light leading-[1.05] text-white md:text-7xl">
                What could your
                <br />
                extra space become?
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
                Tell us what you have in mind and we'll help you shape the right space for your home and garden.
              </p>

              <div className="mt-10">
                <Link
                  href="/project-planner"
                  className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition duration-300 hover:scale-[1.03] hover:bg-[#F7F5F2]"
                >
                  <span>Start Your Project</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}