import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";

const reasons = [
  {
    number: "01",
    title: "Bespoke, Not Off-the-Shelf",
    description:
      "We don't start with a fixed model and ask you to make it fit. Your garden room is shaped around your space, how you want to use it and the look that feels right for your home and garden.",
  },
  {
    number: "02",
    title: "Designed Around Real Life",
    description:
      "A garden room should work beautifully every day, not just look good in a photograph. We think about layout, light, access, storage, comfort and how the space will actually be used.",
  },
  {
    number: "03",
    title: "Thoughtful Materials & Finishes",
    description:
      "From timber-frame construction to cedar or composite cladding, glazing and interior finishes, every element is considered as part of the overall space rather than treated as an afterthought.",
  },
  {
    number: "04",
    title: "Local & Personal",
    description:
      "Based in Bishops Stortford and Stansted Mountfitchet, we focus on working locally and keeping the experience personal, with clear communication and attention to detail from the first conversation onwards.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#23352B] py-16 text-white md:py-20">
      <Container>
        {/* Introduction */}

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
              Why Stortford Garden Rooms
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight md:text-6xl">
              Your space should
              <br />
              feel like yours.
            </h2>
          </Reveal>

          <Reveal
            delay={0.15}
            className="lg:col-span-6 lg:col-start-7 lg:flex lg:items-end"
          >
            <div>
              <p className="max-w-xl text-xl font-light leading-8 text-white md:text-2xl">
                We believe the best garden rooms start with the person who will
                use them, not with a catalogue of standard designs.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                Whether you need somewhere to work, train, entertain, relax or
                create, the room should be shaped around what you want the
                space to make possible.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Reasons */}

        <div className="mt-14 grid border-t border-white/20 md:mt-16 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.number}
              delay={index * 0.08}
              className={`border-b border-white/20 py-8 md:p-9 ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <div className="flex gap-6">
                <span className="shrink-0 pt-1 text-sm text-[#D8D2C7]/45">
                  {reason.number}
                </span>

                <div>
                  <h3 className="text-2xl font-light leading-tight md:text-3xl">
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-7 text-white/60">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing Statement */}

        <Reveal
          delay={0.15}
          className="mt-12 border-t border-white/20 pt-8"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-3xl text-2xl font-light leading-8 text-white md:text-3xl">
              Your garden is different. Your lifestyle is different.
              Your garden room should be too.
            </p>

            <p className="shrink-0 text-sm uppercase tracking-[0.2em] text-[#D8D2C7]/70">
              Bespoke by design
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}