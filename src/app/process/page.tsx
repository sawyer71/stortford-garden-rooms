import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
export const metadata: Metadata = {
  title: "Our Garden Room Design & Build Process",

  description:
    "See how we design and build bespoke garden rooms, from consultation and design through foundations, timber-frame construction, finishing and final handover.",

  alternates: {
    canonical: "/process",
  },

  openGraph: {
    title:
      "Our Garden Room Design & Build Process | Stortford Garden Rooms",

    description:
      "See how a bespoke garden room takes shape, from the first consultation and design through construction, finishing and handover.",

    url: "/process",
  },
};

const processSteps = [
  {
    number: "01",
    eyebrow: "The First Conversation",
    title: "It starts with understanding what you want.",
    description:
      "Every project begins with a conversation. Before thinking about sizes, finishes or specifications, we want to understand what you would actually like your new space to make possible.",
    secondParagraph:
      "We'll talk about how you plan to use the room, your garden, your ideas, your priorities and the budget you have in mind. You don't need to arrive with a finished design — that's what the process is for.",
    features: [
      "How you want to use the space",
      "Your garden and available area",
      "Style and inspiration",
      "Approximate budget",
      "Preferred timescale",
    ],
    image: "/images/process/consultation.png",
    imageAlt:
      "Garden room consultation discussing plans and ideas with homeowners",
  },
  {
    number: "02",
    eyebrow: "Design & Specification",
    title: "Designing a space around the way you live.",
    description:
      "Once we understand the brief, we can begin shaping the garden room itself. This is where ideas start becoming something tangible.",
    secondParagraph:
      "We'll consider the proportions, internal layout, glazing, cladding and finishes together, making sure the finished room feels right for both your lifestyle and your garden.",
    features: [
      "Size and layout",
      "Doors and glazing",
      "Cedar or composite cladding",
      "Lighting and electrics",
      "Heating and interior finishes",
    ],
    image: "/images/process/design.png",
    imageAlt:
      "Garden room architectural plans and material samples during the design stage",
  },
  {
    number: "03",
    eyebrow: "Preparing The Site",
    title: "Good preparation creates a better build.",
    description:
      "Before the walls go up, we make sure the site is properly prepared. That means considering access, levels, the base and everything needed to give the new garden room the right foundation.",
    secondParagraph:
      "We aim to keep the working area organised and disruption sensible throughout the build, treating your garden and home with the same respect we'd expect at our own.",
    features: [
      "Site preparation",
      "Access planning",
      "Levels and setting out",
      "Base and foundations",
      "Organised working area",
    ],
    image: "/images/process/groundworks.png",
    imageAlt:
      "Timber floor base and groundworks being prepared for a garden room",
  },
  {
    number: "04",
    eyebrow: "The Build",
    title: "Craftsmanship behind every wall.",
    description:
      "This is where your garden room really starts to take shape. The structural timber frame is built, the roof and external envelope come together and the building begins to feel like a genuine room.",
    secondParagraph:
      "We believe the parts you eventually won't see matter just as much as the final finish. Careful construction at this stage is what creates a comfortable, durable space for years to come.",
    features: [
      "Timber-frame construction",
      "Insulation",
      "Roof structure",
      "Windows and doors",
      "External cladding",
    ],
    image: "/images/construction/garden-room-timber-frame.png",
    imageAlt:
      "Stortford Garden Rooms timber-frame garden room under construction",
    quote:
      "What sits behind the plasterboard matters just as much as what you see.",
  },
  {
    number: "05",
    eyebrow: "Finishing Touches",
    title: "The last details matter.",
    description:
      "As construction comes to an end, attention turns to the details that make the building feel finished — decoration, flooring, electrics, lighting and the final clean.",
    secondParagraph:
      "Before handover, we want the room to feel ready for you to walk into and make your own, not like a building site that's only just finished.",
    features: [
      "Interior decoration",
      "Flooring",
      "Lighting and sockets",
      "Final checks",
      "Cleaning and handover",
    ],
    image: "/images/process/finishing.png",
    imageAlt:
      "Completed empty garden room being cleaned before customer handover",
  },
  {
    number: "06",
    eyebrow: "Your New Space",
    title: "Then it's yours to enjoy.",
    description:
      "This is the part the whole journey has been leading towards. Your garden room stops being a project and becomes part of everyday life.",
    secondParagraph:
      "Somewhere to work. Somewhere to train. Somewhere to entertain. Somewhere to switch off. Whatever you created it for, now you get to enjoy it.",
    features: [
      "Work",
      "Entertain",
      "Exercise",
      "Relax",
      "Make it yours",
    ],
    image: "/images/process/completed.png",
    imageAlt:
      "Friends enjoying a completed bespoke garden room in the evening",
  },
];

const faqs = [
  {
    question: "Do I need planning permission for a garden room?",
    answer:
      "Many garden rooms can be built under permitted development rights, meaning planning permission may not be required. However, this depends on factors including the size and height of the building, where it sits within your garden, how it will be used and the type of property you own. We can talk through the likely requirements with you at the beginning of your project and help identify anything that needs further consideration.",
  },
  {
    question: "How long does a garden room take to build?",
    answer:
      "Every project is different, so the build time will depend on the size and specification of your garden room, the site conditions and the complexity of the design. Once we have discussed your ideas and developed the specification, we will be able to give you a clear programme for your project before construction begins.",
  },
  {
    question: "Can I use my garden room throughout the year?",
    answer:
      "Yes. Our garden rooms are designed to be comfortable, insulated spaces for year-round use. Insulation, glazing, heating and ventilation can all be considered as part of the specification, creating a room that works just as well in the colder months as it does in summer.",
  },
  {
    question: "How much disruption will there be?",
    answer:
      "There will naturally be some activity while your garden room is being built, but we plan access and site logistics before construction begins and aim to keep the working area organised throughout. We treat your home and garden with care and do everything we reasonably can to keep disruption to a minimum.",
  },
  {
    question: "Can electrics and lighting be included?",
    answer:
      "Yes. Sockets, internal and external lighting, heating and other electrical requirements can all be incorporated into the design. We plan these around how you intend to use the room, whether that means a well-lit workspace, entertainment setup, home gym or something completely individual.",
  },
  {
    question: "Where do you build garden rooms?",
    answer:
      "We are based in Stansted Mountfitchet and build bespoke garden rooms throughout the surrounding areas, including Bishop's Stortford, Saffron Walden, Great Dunmow, Takeley, Sawbridgeworth and Harlow, as well as other locations across Essex and Hertfordshire. If you are unsure whether we cover your area, just get in touch.",
  },
];

export default function ProcessPage() {
  return (
    <main>
      {/* HERO */}

      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#23352B]">
        <Image
          src="/images/process/completed.png"
          alt="Completed bespoke garden room at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#17251D]/95 via-[#23352B]/45 to-transparent" />

        <Container>
          <div className="relative z-10 max-w-5xl pb-16 pt-36 md:pb-20">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">
              Our Process
            </p>

            <h1 className="mt-4 text-5xl font-normal leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              From first conversation
              <br />
              to finished space.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
  Every bespoke garden room begins with an idea. Here&apos;s how we
  take that idea through design, timber-frame construction, finishing
  and final handover.
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

      {/* INTRO */}

      <section className="bg-[#F7F5F2] py-16 md:py-20">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
              A Straightforward Journey
            </p>

            <h2 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-6xl">
              Building your garden room
              <br />
              shouldn&apos;t feel complicated.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#2A2A2A]/70">
              From the first conversation through to handover, we keep the
              process clear, personal and focused on creating the right space
              for you.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* PROCESS JOURNEY */}

      <section className="bg-[#F7F5F2] pb-16 md:pb-20">
        <Container>
          <div className="space-y-16 md:space-y-20">
            {processSteps.map((step, index) => {
              const imageFirst = index % 2 === 0;

              return (
                <article
                  key={step.number}
                  className="border-t border-[#23352B]/10 pt-12"
                >
                  <div
  className={`grid gap-10 lg:grid-cols-12 lg:gap-14 ${
    index === 0 ? "lg:items-start" : "lg:items-center"
  }`}
>
                    {/* IMAGE */}

                    <Reveal
                      direction={imageFirst ? "left" : "right"}
                      className={`lg:col-span-7 ${
                        imageFirst ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div
                        className={`group relative overflow-hidden rounded-[1.5rem] bg-[#D8D2C7] ${
                          step.number === "04"
                            ? "aspect-[4/3]"
                            : "aspect-[16/10]"
                        }`}
                      >
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="object-cover transition duration-1000 ease-out group-hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                        <span className="absolute left-5 top-5 text-sm tracking-[0.2em] text-white/85">
                          {step.number}
                        </span>
                      </div>
                    </Reveal>

                    {/* CONTENT */}

                    <Reveal
                      direction={imageFirst ? "right" : "left"}
                      delay={0.12}
                      className={`relative lg:col-span-5 ${
                        imageFirst ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Oversized background number */}

                      <span className="pointer-events-none absolute -top-16 right-0 hidden text-[11rem] font-medium leading-none text-[#23352B]/[0.035] lg:block">
                        {step.number}
                      </span>

                      <div className="relative z-10">
                        <p className="text-sm uppercase tracking-[0.25em] text-[#A7744A]">
                          {step.eyebrow}
                        </p>

                        <h2 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-5xl">
                          {step.title}
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-[#2A2A2A]/70">
                          {step.description}
                        </p>

                        <p className="mt-4 text-base leading-7 text-[#2A2A2A]/65">
                          {step.secondParagraph}
                        </p>

                        {step.quote && (
                          <blockquote className="mt-6 border-l border-[#A7744A] pl-5 text-xl font-normal leading-8 text-[#23352B]">
                            “{step.quote}”
                          </blockquote>
                        )}

                        <div className="mt-6 border-t border-[#23352B]/10 pt-5">
                          <div className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                            {step.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-3 text-sm text-[#23352B]/70"
                              >
                                <span className="mt-[2px] text-[#A7744A]">
                                  —
                                </span>

                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ */}

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Common Questions
              </p>

              <h2 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-5xl">
                A few things
                <br />
                you might be wondering.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#2A2A2A]/65">
                Every project is different, but these are some of the questions
                we&apos;re asked most often at the beginning of the process.
              </p>
            </Reveal>

            <div className="lg:col-span-7 lg:col-start-6">
              {faqs.map((faq, index) => (
                <Reveal
                  key={faq.question}
                  delay={index * 0.05}
                >
                  <details className="group border-t border-[#23352B]/15 last:border-b">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                      <span className="text-lg font-medium text-[#23352B] md:text-xl">
                        {faq.question}
                      </span>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#23352B]/15 text-[#23352B] transition duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="max-w-2xl pb-6 pr-12 text-base leading-7 text-[#2A2A2A]/65">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-[#23352B]">
        <Image
          src="/images/process/completed.png"
          alt="Finished bespoke garden room ready to enjoy"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#17251D]/80" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#17251D]/95 via-[#23352B]/65 to-black/30" />

        <Container>
          <div className="relative z-10 flex min-h-[500px] items-center justify-center py-16 text-center md:min-h-[560px] md:py-20">
            <Reveal className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Take The First Step
              </p>

              <h2 className="mt-4 text-4xl font-normal leading-[1.05] text-white md:text-6xl lg:text-7xl">
                Ready to create
                <br />
                your own space?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Tell us what you have in mind and we&apos;ll start with a simple
                conversation about what could work for your home and garden.
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