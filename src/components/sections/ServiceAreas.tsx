import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";

const areas = [
  "Stansted Mountfitchet",
  "Bishop's Stortford",
  "Saffron Walden",
  "Great Dunmow",
  "Sawbridgeworth",
  "Harlow",
  "Much Hadham",
  "Takeley",
];

export default function ServiceAreas() {
  return (
    <section className="bg-[#23352B] py-24 text-white md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Introduction */}

          <Reveal className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
              Local Garden Room Specialists
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
  <span className="block whitespace-nowrap">
    Beautiful spaces,
  </span>
  <span className="mt-2 block whitespace-nowrap">
    built locally.
  </span>
</h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-white/70">
              Based in Bishop&apos;s Stortford and Stansted Mountfitchet, we design and build bespoke
garden rooms for homeowners throughout the surrounding areas of
Essex and Hertfordshire.
            </p>
          </Reveal>

          {/* Areas */}

          <Reveal
            delay={0.15}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="border-t border-white/20">
              {areas.map((area, index) => (
                <div
                  key={area}
                  className="group flex items-center justify-between border-b border-white/20 py-6"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-white/40">
                      0{index + 1}
                    </span>

                    <span className="text-xl font-light text-white transition-transform duration-300 group-hover:translate-x-2 md:text-2xl">
                      {area}
                    </span>
                  </div>

                  <span className="text-white/30 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#D8D2C7]">
                    →
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}