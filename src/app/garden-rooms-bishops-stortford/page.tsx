import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Garden Rooms Bishop's Stortford",

  description:
    "Bespoke garden rooms in Bishop's Stortford, designed and built around your home, garden and lifestyle. Offices, gyms, bars, studios and more.",

  alternates: {
    canonical: "/garden-rooms-bishops-stortford",
  },

  openGraph: {
    title:
      "Garden Rooms Bishop's Stortford | Stortford Garden Rooms",

    description:
      "Bespoke garden rooms designed and built for homeowners in Bishop's Stortford and surrounding areas.",

    url: "/garden-rooms-bishops-stortford",
  },
};

const roomIdeas = [
  {
    title: "Garden Offices",
    description:
      "Create a quiet, comfortable workspace away from the main house, designed for year-round working and everyday productivity.",
  },
  {
    title: "Home Gyms",
    description:
      "Build a dedicated training space around your equipment, routine and the way you like to exercise.",
  },
  {
    title: "Garden Bars",
    description:
      "Create somewhere made for entertaining, relaxing and enjoying time with friends and family.",
  },
  {
    title: "Cinema & Games Rooms",
    description:
      "A dedicated space for films, sport, gaming, pool, darts or simply spending more time together.",
  },
  {
    title: "Studios & Creative Spaces",
    description:
      "A peaceful room for creative work, hobbies, treatments or a home-based business.",
  },
  {
    title: "Something Completely Bespoke",
    description:
      "Your garden room does not have to fit into a category. We can shape the space around whatever you want it to make possible.",
  },
];

const faqs = [
  {
    question:
      "Do I need planning permission for a garden room in Bishop's Stortford?",
    answer:
      "Many garden rooms can be built under permitted development rights, but this depends on factors including the size and height of the building, its position within your garden, how it will be used and the type of property you own. We can discuss the likely requirements with you at the beginning of your project.",
  },
  {
    question:
      "Can a garden room be used throughout the year?",
    answer:
      "Yes. Our garden rooms are designed as insulated, comfortable spaces for year-round use. Glazing, heating, ventilation and the overall specification can all be planned around how you intend to use the room.",
  },
  {
    question:
      "What can I use a garden room for?",
    answer:
      "Garden offices, gyms, bars, cinema rooms, games rooms, studios, wellness spaces and family rooms are all popular options. Because every project is bespoke, the layout and specification can be designed around your particular needs.",
  },
  {
    question:
      "Do you only build in Bishop's Stortford?",
    answer:
      "No. Bishop's Stortford is one of our core local areas, but we also work throughout Stansted Mountfitchet, Saffron Walden, Great Dunmow, Sawbridgeworth, Takeley, Much Hadham, Harlow and surrounding areas across Essex and Hertfordshire.",
  },
];

export default function BishopsStortfordGardenRoomsPage() {
  return (
    <main>
      {/* HERO */}

      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Bespoke garden room in Bishop's Stortford"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#17251D]/95 via-[#23352B]/40 to-transparent" />

        <Container>
          <Reveal className="relative z-10 max-w-5xl pb-16 pt-36 text-white md:pb-20">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">
              Garden Rooms · Bishop&apos;s Stortford
            </p>

            <h1 className="mt-4 max-w-5xl text-[2.6rem] font-light leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">
                Bespoke garden rooms
              </span>

              <span className="mt-3 block">
                built around you.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Bespoke garden rooms designed and built for homes in
              Bishop&apos;s Stortford and the surrounding area — creating
              beautiful spaces to work, train, entertain, relax and enjoy.
            </p>

            <div className="mt-8">
              <Link
                href="/project-planner"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition duration-300 hover:bg-[#F7F5F2]"
              >
                Start Your Project
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* INTRODUCTION */}

      <section className="bg-[#F7F5F2] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Garden Rooms Bishop&apos;s Stortford
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
                More space without
                <br />
                moving home.
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-light leading-9 text-[#23352B] md:text-2xl">
                A well-designed garden room can completely change the way you
                use your home.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                Whether you need a dedicated office, somewhere to exercise,
                a room for entertaining or simply more usable space,
                Stortford Garden Rooms creates bespoke timber-framed garden
                rooms designed around your property, your garden and the way
                you want to live.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                Rather than starting with a catalogue of fixed designs, we
                begin by understanding what you want the room to do. Size,
                layout, glazing, cladding, heating, lighting and interior
                finishes can then be considered together as part of one
                carefully thought-out space.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ROOM IDEAS */}

      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
              Designed Around Your Life
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
              What could your garden
              <br />
              room become?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#2A2A2A]/70">
              Every household needs something different. These are just some
              of the ways homeowners use their new garden space.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-[#23352B]/10 md:grid-cols-2 lg:grid-cols-3">
            {roomIdeas.map((room, index) => (
              <Reveal
                key={room.title}
                delay={index * 0.06}
                className="bg-[#F7F5F2] p-8 md:p-10"
              >
                <span className="text-xs tracking-[0.2em] text-[#A7744A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-light text-[#23352B]">
                  {room.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-[#2A2A2A]/65">
                  {room.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/inspiration"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#23352B]"
            >
              Explore Garden Room Ideas

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* WHY BESPOKE */}

      <section className="bg-[#23352B] py-16 text-white md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
                Bespoke By Design
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                Designed for your
                <br />
                home and garden.
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-light leading-9 md:text-2xl">
                The best garden room is one that feels like it belongs there.
              </p>

              <p className="mt-6 text-base leading-8 text-white/65">
                That means considering much more than the footprint. We look
                at how the room sits within the garden, where natural light
                comes from, how you will approach it from the house and how
                the exterior materials work with the surrounding property.
              </p>

              <p className="mt-6 text-base leading-8 text-white/65">
                Timber-frame construction, year-round insulation, glazing,
                cedar or composite cladding, heating, lighting, data and
                interior finishes can all be brought together around the way
                you intend to use the room.
              </p>

              <Link
                href="/garden-rooms"
                className="group mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white"
              >
                Explore Our Garden Rooms

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* LOCAL */}

      <section className="bg-[#F7F5F2] py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20">
            <Reveal
              direction="left"
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#D8D2C7]">
                <Image
                  src="/images/projects/garden-office.png"
                  alt="Garden room inspiration for a Bishop's Stortford home"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.15}
              className="lg:col-span-5 lg:col-start-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Local To Bishop&apos;s Stortford
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
                Close enough to
                <br />
                keep things personal.
              </h2>

              <p className="mt-7 text-base leading-8 text-[#2A2A2A]/70">
                Bishop&apos;s Stortford is one of the main areas we serve.
                Keeping our projects relatively local allows us to stay
                personally involved throughout the process, from the first
                conversation and site visit through to construction and
                handover.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                We also work throughout nearby Stansted Mountfitchet, Much
                Hadham, Sawbridgeworth, Takeley, Great Dunmow, Saffron Walden
                and surrounding towns and villages across the Essex and
                Hertfordshire border.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PROCESS */}

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                From Idea To Finished Room
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
                A straightforward
                <br />
                way to get started.
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-light leading-9 text-[#23352B] md:text-2xl">
                You do not need to arrive with a finished design.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                Start by telling us how you would like to use the space, what
                you have in mind and the approximate budget you are working
                with. From there we can begin shaping the right garden room
                for your home.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                Our process takes you from the first conversation through
                design and specification, site preparation, timber-frame
                construction, finishing and final handover.
              </p>

              <Link
                href="/process"
                className="group mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#23352B]"
              >
                See How It Works

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQs */}

      <section className="bg-[#F7F5F2] py-16 md:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
              Garden rooms in
              <br />
              Bishop&apos;s Stortford.
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-[#23352B]/10">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={index * 0.05}
                className="grid gap-5 border-b border-[#23352B]/10 py-8 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-5">
                  <h3 className="text-xl font-light leading-7 text-[#23352B] md:text-2xl">
                    {faq.question}
                  </h3>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-base leading-7 text-[#2A2A2A]/65">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Start your garden room project in Bishop's Stortford"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#23352B]/85" />

        <Container>
          <div className="relative z-10 flex min-h-[520px] items-center justify-center py-20 text-center text-white">
            <Reveal className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Your Garden Room Starts Here
              </p>

              <h2 className="mt-6 text-5xl font-light leading-[1.05] md:text-6xl">
                Have an idea for
                <br />
                your garden?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Tell us what you have in mind and we&apos;ll help you explore
                what could work for your home, your garden and your budget.
              </p>

              <div className="mt-9">
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