import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Garden Room Prices & Costs",

  description:
    "Understand garden room prices, what affects the cost of a bespoke build and what is included in a standard Stortford Garden Rooms specification.",

  alternates: {
    canonical: "/garden-room-prices",
  },

  openGraph: {
    title:
      "Garden Room Prices & Costs | Stortford Garden Rooms",

    description:
      "Learn what affects the cost of a bespoke garden room, what is included as standard and why larger rooms can offer better value per square metre.",

    url: "/garden-room-prices",
  },
};

const includedItems = [
  "Foundations",
  "Timber-framed structure",
  "Full insulation",
  "One set of uPVC French doors",
  "Composite or cedar cladding",
  "Internal plaster finish",
  "Lighting and electrics",
  "Laminate flooring",
  "White painted interior",
];

const priceFactors = [
  {
    title: "Overall Size",
    description:
      "Larger rooms naturally require more materials, but the cost per square metre can reduce slightly because many parts of the build process remain broadly similar regardless of size.",
  },
  {
    title: "Cladding Choice",
    description:
      "Composite and cedar create different looks and can carry different material and installation costs depending on the exact product selected.",
  },
  {
    title: "Glazing & Doors",
    description:
      "The amount and style of glazing can have a significant effect on cost, especially where larger sliding or bifold door systems are specified.",
  },
  {
    title: "Site Conditions",
    description:
      "Access, ground conditions, levels and the amount of preparation required can all influence the overall cost of the project.",
  },
  {
    title: "Electrical Specification",
    description:
      "Additional sockets, external lighting, data points, heating, air conditioning or specialist electrical requirements can all be incorporated into the design.",
  },
  {
    title: "Interior Finish",
    description:
      "A standard room includes plastering, laminate flooring and white decoration, while upgraded flooring, joinery, cabinetry or bespoke finishes can be added if required.",
  },
];

const faqs = [
  {
    question: "How much does a garden room cost?",
    answer:
      "The final price depends on the size of the room, specification, site conditions, glazing, cladding and any additional features you choose. Rather than working from a single fixed price, we build a quotation around the room you actually want.",
  },
  {
    question: "Why does the price per square metre reduce on larger rooms?",
    answer:
      "Many parts of a garden room project involve similar labour, setup and build stages regardless of whether the room is relatively small or larger. As the floor area increases, those fixed elements are spread across more square metres, so the effective rate per square metre can reduce slightly.",
  },
  {
    question: "What is included in the standard specification?",
    answer:
      "Our standard specification includes foundations, an insulated timber-framed structure, one set of uPVC French doors, composite or cedar cladding, internal plastering, lighting, electrics, laminate flooring and a white painted interior.",
  },
  {
    question: "Can I upgrade the specification?",
    answer:
      "Yes. Every garden room is bespoke, so additional glazing, upgraded doors, heating, air conditioning, extra electrics, specialist flooring, cabinetry and other features can all be incorporated into the design.",
  },
];

export default function GardenRoomPricesPage() {
  return (
    <main>
      {/* HERO */}

      <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Bespoke garden room pricing and specification"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#17251D]/95 via-[#23352B]/45 to-transparent" />

        <Container>
          <Reveal className="relative z-10 max-w-5xl pb-16 pt-36 text-white md:pb-20">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">
              Garden Room Prices
            </p>

            <h1 className="mt-4 max-w-5xl text-[2.6rem] font-light leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">
                What does a garden
              </span>

              <span className="mt-3 block">
                room really cost?
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Garden room prices depend on size, specification and site
              conditions. We prefer to explain what drives the cost clearly
              rather than advertise a headline figure that may not reflect
              the room you actually want.
            </p>

            <div className="mt-8">
              <Link
                href="/project-planner"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition duration-300 hover:bg-[#F7F5F2]"
              >
                Tell Us About Your Project
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PRICING APPROACH */}

      <section className="bg-[#F7F5F2] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                How We Think About Price
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
                Size matters.
                <br />
                But not quite how
                <br />
                you might expect.
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-light leading-9 text-[#23352B] md:text-2xl">
                The smaller the room, the slightly higher the effective price
                per square metre tends to be.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                That is because building a 10m² garden room involves many of
                the same stages, setup, labour and project management as
                building a 15m² or 20m² room. The larger room uses more
                materials, but the overall build process does not increase in
                direct proportion to the floor area.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                As the room gets larger, those fixed elements are spread
                across more square metres. The result is usually a modest
                reduction in the effective cost per square metre.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                We therefore use room size as an important starting point,
                while the final quotation is built around the actual
                specification and site rather than a single flat rate.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* STANDARD SPEC */}

      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
              Standard Specification
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
              More than just
              <br />
              a shell.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#2A2A2A]/70">
              Our standard specification is designed to give you a finished,
              usable garden room rather than a basic structure that still
              needs significant work afterwards.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-[#23352B]/10 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item, index) => (
              <Reveal
                key={item}
                delay={index * 0.05}
                className="bg-[#F7F5F2] p-8"
              >
                <span className="text-xs tracking-[0.2em] text-[#A7744A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 text-xl font-light text-[#23352B]">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm leading-7 text-[#2A2A2A]/60">
              The final specification is agreed with you before the build
              begins, so you know exactly what is included in your quotation.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* WHAT AFFECTS COST */}

      <section className="bg-[#23352B] py-16 text-white md:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
              What Affects Garden Room Cost?
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
              The details make
              <br />
              the difference.
            </h2>
          </Reveal>

          <div className="mt-14 grid border-t border-white/20 md:grid-cols-2">
            {priceFactors.map((factor, index) => (
              <Reveal
                key={factor.title}
                delay={index * 0.06}
                className={`border-b border-white/20 py-8 md:p-9 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex gap-6">
                  <span className="shrink-0 pt-1 text-sm text-[#D8D2C7]/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-light">
                      {factor.title}
                    </h3>

                    <p className="mt-4 max-w-md text-base leading-7 text-white/60">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY WE DON'T SHOW A FIXED PRICE */}

      <section className="bg-[#F7F5F2] py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Indicative Pricing
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
                A useful guide.
                <br />
                Not a misleading
                <br />
                headline price.
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-light leading-9 text-[#23352B] md:text-2xl">
                We would rather give you a realistic figure than advertise a
                low starting price that bears little resemblance to the
                finished room.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                Two garden rooms with the same floor area can have very
                different costs depending on the glazing, cladding, site,
                electrical requirements and internal specification.
              </p>

              <p className="mt-6 text-base leading-8 text-[#2A2A2A]/70">
                Our Project Planner gives us a useful starting point. Once we
                understand the approximate size, intended use, features,
                location, budget and timescale, we can begin discussing what a
                realistic specification and price might look like.
              </p>

              <Link
                href="/project-planner"
                className="group mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#23352B]"
              >
                Start Your Project

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FUTURE PRICE EXAMPLES */}

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#23352B]/10 bg-[#F7F5F2] p-8 text-center md:p-12">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Price Examples Coming Soon
              </p>

              <h2 className="mt-5 text-3xl font-light leading-tight text-[#23352B] md:text-4xl">
                Clearer example pricing is on the way.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#2A2A2A]/65">
                We are developing a detailed pricing model based on room size
                and specification so we can publish useful example costs for
                common garden room sizes without relying on unrealistic
                headline figures.
              </p>
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
              Garden room
              <br />
              pricing explained.
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
          alt="Start planning your bespoke garden room"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#23352B]/85" />

        <Container>
          <div className="relative z-10 flex min-h-[500px] items-center justify-center py-20 text-center text-white">
            <Reveal className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Ready To Talk Numbers?
              </p>

              <h2 className="mt-6 text-5xl font-light leading-[1.05] md:text-6xl">
                Tell us what
                <br />
                you have in mind.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Give us an idea of the room you would like to create and we
                can start exploring the right size, specification and budget
                for your project.
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