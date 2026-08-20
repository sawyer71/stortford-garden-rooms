import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Bespoke Garden Rooms Essex & Hertfordshire",

  description:
    "Bespoke garden rooms across Essex and Hertfordshire, designed for offices, gyms, bars, cinema rooms and more, with cedar or composite cladding.",

  alternates: {
    canonical: "/garden-rooms",
  },

  openGraph: {
    title:
      "Bespoke Garden Rooms Essex & Hertfordshire | Stortford Garden Rooms",

    description:
      "Bespoke garden rooms across Essex and Hertfordshire, designed for offices, gyms, bars, cinema rooms and more.",

    url: "/garden-rooms",
  },
};

const roomTypes = [
  {
    number: "01",
    title: "Home Offices",
    description:
      "Create a calm, dedicated workspace away from the distractions of home, designed around the way you work.",
  },
  {
    number: "02",
    title: "Garden Bars",
    description:
      "A relaxed space for entertaining friends, unwinding at the weekend and enjoying your garden throughout the year.",
  },
  {
    number: "03",
    title: "Cinema Rooms",
    description:
      "Create your own immersive space for films, sporting events and memorable evenings at home.",
  },
  {
    number: "04",
    title: "Games Rooms",
    description:
      "From pool tables and gaming setups to darts and social spaces, create somewhere designed entirely for fun.",
  },
  {
    number: "05",
    title: "Home Gyms",
    description:
      "A private fitness space just steps from your home, designed around your equipment, training and routine.",
  },
  {
    number: "06",
    title: "Beauty & Wellness",
    description:
      "Create a calm, professional treatment or wellness space that feels separate from the main house.",
  },
];

const features = [
  "Bespoke design",
  "Timber-frame construction",
  "Year-round insulation",
  "Cedar or composite cladding",
  "Quality windows and doors",
  "Electrical installation",
  "Interior lighting",
  "Heating options",
];

export default function GardenRoomsPage() {
  return (
    <main>
      {/* HERO */}

      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Contemporary bespoke garden room in an Essex garden"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-[#17251D]/95 via-[#23352B]/35 to-transparent" />

        <Container>
          <div className="relative z-10 max-w-5xl pb-16 pt-36 md:pb-20">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">
              Bespoke Garden Rooms
            </p>

            <h1 className="max-w-5xl text-[2.4rem] font-light leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
  <span className="block sm:whitespace-nowrap">
    Designed for your garden.
  </span>

  <span className="mt-3 block sm:whitespace-nowrap">
    Built around your life.
  </span>
</h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
  Bespoke timber-framed garden rooms designed and built across Essex and
  Hertfordshire, created around your space, your style and the way you want
  to use it.
</p>

            <div className="mt-8">
              <Link
                href="/project-planner"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition duration-300 hover:bg-[#F7F5F2]"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* INTRODUCTION */}

      <section className="bg-[#F7F5F2] py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Designed Around You
              </p>

              <h2 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-6xl">
                Not just another
                <br />
                room.
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-normal leading-8 text-[#23352B] md:text-2xl">
                Your garden room should feel like a natural extension of the
                way you live.
              </p>

              <p className="mt-5 text-base leading-7 text-[#2A2A2A]/70">
                Every Stortford Garden Rooms project is shaped around the
                customer, the available garden space and how the finished room
                will be used.
              </p>

              <p className="mt-4 text-base leading-7 text-[#2A2A2A]/70">
                From its proportions and layout to the cladding, glazing,
                lighting and interior finishes, each detail is considered as
                part of the overall space.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* IMAGE FEATURE */}

      <section className="bg-[#F7F5F2] pb-16 md:pb-20">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/8] overflow-hidden rounded-[1.5rem] bg-[#D8D2C7]">
              <Image
                src="/images/projects/garden-office.png"
                alt="Timber-clad bespoke garden office"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ROOM TYPES */}

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
              Made For Living
            </p>

            <h2 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-6xl">
              One room.
              <br />
              Endless possibilities.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#2A2A2A]/70">
              There is no single way to use a garden room. We create spaces
              around what matters to you now, with the flexibility to evolve
              as your lifestyle changes.
            </p>
          </Reveal>

          <div className="mt-14 grid border-t border-[#23352B]/10 md:mt-16 md:grid-cols-2">
            {roomTypes.map((room, index) => (
              <Reveal
                key={room.title}
                delay={index * 0.08}
                className={`border-b border-[#23352B]/10 py-8 md:p-9 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex gap-6">
                  <span className="shrink-0 pt-1 text-sm text-[#A7744A]">
                    {room.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-normal leading-tight text-[#23352B] md:text-3xl">
                      {room.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-base leading-7 text-[#2A2A2A]/70">
                      {room.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CONSTRUCTION / MATERIALS */}

      <section className="bg-[#23352B] py-16 text-white md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <Reveal
              direction="left"
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#17251D]">
                <Image
  src="/images/construction/garden-room-timber-frame.png"
  alt="Timber-frame garden room under construction by Stortford Garden Rooms"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover"
/>

                <div className="absolute inset-0 bg-black/10" />
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.15}
              className="lg:col-span-5 lg:col-start-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
                Built With Purpose
              </p>

              <h2 className="mt-4 text-4xl font-normal leading-tight md:text-6xl">
                Crafted for
                <br />
                every season.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/70">
                Our garden rooms use timber-frame construction to create
                comfortable spaces intended to be enjoyed throughout the year.
              </p>

              <p className="mt-4 text-base leading-7 text-white/60">
                Choose the warmth and natural character of cedar or the clean,
                contemporary appearance and lower maintenance of composite
                cladding.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-white/20 pt-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <span className="mt-1 text-[#D8D2C7]">—</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CLADDING */}

      <section className="bg-[#F7F5F2] py-16 md:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
              Your Finish
            </p>

            <h2 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-6xl">
              Cedar or composite.
              <br />
              The choice is yours.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-2">
            <Reveal direction="left">
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#D8D2C7]">
                  <Image
                    src="/images/projects/garden-office.png"
                    alt="Natural cedar-clad garden room"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-normal text-[#23352B] md:text-3xl">
                  Natural Cedar
                </h3>

                <p className="mt-3 max-w-xl text-base leading-7 text-[#2A2A2A]/70">
                  Warm, distinctive and naturally beautiful. Cedar creates a
                  timeless architectural finish that sits comfortably within a
                  garden setting.
                </p>
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.15}
            >
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#D8D2C7]">
                  <Image
                    src="/images/projects/garden-retreat.png"
                    alt="Contemporary composite-clad garden room"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-normal text-[#23352B] md:text-3xl">
                  Composite Cladding
                </h3>

                <p className="mt-3 max-w-xl text-base leading-7 text-[#2A2A2A]/70">
                  Contemporary, durable and lower maintenance. Composite
                  cladding provides a clean modern finish with a broad choice
                  of colours and styles.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Contemporary garden room at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#17251D]/80" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#17251D]/90 via-[#23352B]/65 to-black/35" />

        <Container>
          <div className="relative z-10 flex min-h-[500px] items-center justify-center py-16 text-center md:min-h-[560px] md:py-20">
            <Reveal className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Your Garden. Your Space.
              </p>

              <h2 className="mt-4 text-4xl font-normal leading-[1.05] text-white md:text-6xl lg:text-7xl">
                Let&apos;s create something
                <br />
                that&apos;s completely yours.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Tell us what you have in mind and we&apos;ll help you explore the
                possibilities for your garden.
              </p>

              <div className="mt-8">
                <Link
                  href="/project-planner"
                  className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition duration-300 hover:bg-[#F7F5F2]"
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