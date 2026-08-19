import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";

const inspiration = [
  {
    number: "01",
    title: "The Garden Office",
    category: "Home Office Inspiration",
    tagline: "A calm place to focus, just steps from home.",
    description:
      "A dedicated workspace can give you the separation of a traditional office without the commute. Designed around natural light, comfort and everyday practicality.",
    image: "/images/projects/garden-office.png",
    alt: "Contemporary garden office with large glazing and a dedicated workspace",
  },
  {
    number: "02",
    title: "The Entertainer",
    category: "Social Space Inspiration",
    tagline: "A relaxed space made for spending time together.",
    description:
      "Create somewhere to unwind, watch the match, enjoy a drink or spend time with friends and family — without taking over the main house.",
    image: "/images/projects/the-entertainer-v2.png",
    alt: "Modern garden room designed as a social and entertainment space",
  },
  {
    number: "03",
    title: "The Garden Retreat",
    category: "Lifestyle Inspiration",
    tagline: "A peaceful space that feels completely your own.",
    description:
      "A quiet garden room can become somewhere to read, relax, enjoy a hobby or simply switch off — designed to feel naturally connected to your garden.",
    image: "/images/projects/garden-retreat.png",
    alt: "Contemporary garden retreat designed for relaxing and everyday use",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-20">
      <Container>
        {/* Section Introduction */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
              Garden Room Inspiration
            </p>

            <h2 className="mt-4 text-4xl font-light leading-[1.05] text-[#23352B] md:text-5xl lg:whitespace-nowrap">
  Imagine what your garden could become.
</h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#2A2A2A]/70">
              Every garden room can be completely different. These ideas are
              here to help you picture what might work for your own home,
              lifestyle and available space.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              href="/inspiration"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#23352B]"
            >
              <span>Explore Garden Room Inspiration</span>

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Inspiration Projects */}

        <div className="mt-14 space-y-16 md:mt-16 md:space-y-20">
          {inspiration.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12"
            >
              {/* Image */}

              <Reveal
                direction={index % 2 === 0 ? "left" : "right"}
                className={`relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#D8D2C7] md:col-span-8 ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <Link
  href="/inspiration"
  className="group block h-full w-full"
>
  <div className="relative h-full w-full">
    <Image
      src={item.image}
      alt={item.alt}
      fill
      sizes="(max-width: 1024px) 100vw, 66vw"
      loading={index === 0 ? "eager" : "lazy"}
      className="object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 transition duration-700 group-hover:from-black/50" />

    <div className="absolute left-5 top-5 text-sm tracking-[0.2em] text-white/80">
      {item.number}
    </div>
  </div>
</Link>
              </Reveal>

              {/* Content */}

              <Reveal
                direction={index % 2 === 0 ? "right" : "left"}
                delay={0.12}
                className={`md:col-span-4 ${
                  index % 2 !== 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#A7744A]">
                  {item.category}
                </p>

                <h3 className="mt-4 text-3xl font-light leading-tight text-[#23352B] md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg font-light leading-7 text-[#23352B]">
                  {item.tagline}
                </p>

                <p className="mt-4 text-base leading-7 text-[#2A2A2A]/70">
                  {item.description}
                </p>

                <Link
                  href="/project-planner"
                  className="group mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#23352B]"
                >
                  <span>Explore Your Idea</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </Reveal>
            </article>
          ))}
        </div>

        {/* Closing CTA */}

<Reveal
  delay={0.15}
  className="mt-16 border-t border-[#23352B]/10 pt-8 md:mt-20"
>
  <div className="grid gap-6 md:grid-cols-12 md:items-center">
    <div className="md:col-span-8">
      <p className="text-sm uppercase tracking-[0.2em] text-[#A7744A]">
        Your Project Could Be Completely Different
      </p>

      <p className="mt-4 text-2xl font-light leading-8 text-[#23352B] md:text-3xl">
  <span className="block">
    Have an idea that doesn&apos;t fit neatly into a category?
  </span>

  <span className="mt-2 block">
    That&apos;s exactly what bespoke is for.
  </span>
</p>
    </div>

    <div className="md:col-span-4 md:text-right">
      <Link
        href="/project-planner"
        className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#23352B]"
      >
        <span>Start Your Project</span>

        <span className="transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </Link>
    </div>
  </div>
</Reveal>
      </Container>
    </section>
  );
}