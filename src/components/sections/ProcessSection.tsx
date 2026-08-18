import Link from "next/link";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";

const processSteps = [
  {
    number: "01",
    title: "Let's Talk",
    description:
      "Tell us what you have in mind. We'll talk about how you'd like to use the room, your garden, the space available and the kind of budget you're working with.",
  },
  {
    number: "02",
    title: "Design Your Space",
    description:
      "Together, we'll shape the right garden room for you — considering the size, layout, glazing, cladding, interior and the details that will make the space work for your lifestyle.",
  },
  {
    number: "03",
    title: "We Build",
    description:
      "Once everything is agreed, your garden room starts to take shape. We focus on quality timber-frame construction, carefully selected materials and attention to the details that bring the design together.",
  },
  {
    number: "04",
    title: "Make It Yours",
    description:
      "Then comes the best part. Move in and make the space your own — whether that's somewhere to work, train, entertain, create, relax or spend more time together.",
  },
];

export default function ProcessSection() {
  return (
    <section className="scroll-mt-24 bg-white py-16 md:scroll-mt-28 md:py-20">
      <Container>
        {/* Section Introduction */}

        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-light leading-tight text-[#23352B] md:text-6xl">
            From first idea
            <br />
            to your new space.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#2A2A2A]/70">
            Designing and building a bespoke garden room shouldn&apos;t feel complicated.
We keep the journey clear, personal and straightforward from the first
conversation through to completion.
          </p>
        </Reveal>

        {/* Process Steps */}

        <div className="relative mt-14 md:mt-16">
          {/* Connecting Line */}

          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#23352B]/10 lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.12}
                className="relative"
              >
                {/* Number */}

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#23352B]/20 bg-white text-sm text-[#23352B] transition duration-300 hover:border-[#A7744A] hover:text-[#A7744A]">
                  {step.number}
                </div>

                {/* Content */}

                <div className="mt-6">
                  <h3 className="text-2xl font-light leading-tight text-[#23352B] md:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#2A2A2A]/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <Reveal
          delay={0.2}
          className="mt-14 border-t border-[#23352B]/10 pt-8 md:mt-16"
        >
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="text-sm uppercase tracking-[0.2em] text-[#A7744A]">
                Have an idea already?
              </p>

              <p className="mt-4 max-w-2xl text-2xl font-light leading-8 text-[#23352B] md:text-3xl">
                Tell us what you&apos;re imagining and we&apos;ll help you take the next
                step.
              </p>

              <p className="mt-3 max-w-xl text-base leading-7 text-[#2A2A2A]/60">
                Our project planner gives us a better idea of the space you&apos;d
                like to create.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <Link
                href="/project-planner"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#23352B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#A7744A]"
              >
                <span>Plan Your Garden Room</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
  href="/process"
  className="inline-flex items-center justify-center rounded-full border border-[#23352B]/20 px-7 py-4 text-sm font-medium text-[#23352B] transition duration-300 hover:border-[#23352B]/50"
>
  See How We Build Your Garden Room
</Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}