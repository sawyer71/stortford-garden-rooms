import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
export const metadata: Metadata = {
  title: "Garden Room Ideas & Inspiration",

  description:
    "Explore garden room ideas for home offices, gyms, bars, cinema rooms, games rooms and creative spaces, designed for homes across Essex and Hertfordshire.",

  alternates: {
    canonical: "/inspiration",
  },

  openGraph: {
    title:
      "Garden Room Ideas & Inspiration | Stortford Garden Rooms",

    description:
      "Explore inspiring ideas for bespoke garden offices, gyms, bars, cinema rooms, games rooms and creative spaces.",

    url: "/inspiration",
  },
};

const ideas = [
  {
    number: "01",
    title: "The Focus Space",
    use: "Home Office",
    tagline: "Work from home. Without feeling at home.",
    description:
      "Imagine a dedicated workspace designed around the way you work. Natural light, comfortable proportions and genuine separation from the main house create somewhere you can focus during the day and leave behind when the working day is done.",
    possibilities: [
      "Dedicated workspace",
      "Year-round use",
      "Flexible glazing",
    ],
    image: "/images/lifestyle/home-office.png",
    imagePosition: "center",
  },
  {
    number: "02",
    title: "The Social Space",
    use: "Bar & Entertainment",
    tagline: "Give everyone somewhere to gather.",
    description:
      "Create a space made for good times. From a contemporary garden bar to somewhere for dining, music and entertaining friends, your garden room can become the place everyone naturally gravitates towards.",
    possibilities: [
      "Garden bar",
      "Social seating",
      "Entertainment space",
    ],
    image: "/images/lifestyle/garden-bar.png",
    imagePosition: "center",
  },
  {
    number: "03",
    title: "The Cinema Space",
    use: "Cinema & Sport",
    tagline: "Bring the big-screen experience home.",
    description:
      "Create an immersive room for films, sporting events and relaxed evenings with family and friends. Lighting, sound, seating and screen position can all be planned around the experience you want.",
    possibilities: [
      "Cinema screen",
      "Surround sound",
      "Comfortable seating",
    ],
    image: "/images/lifestyle/cinema-room.png",
    imagePosition: "center",
  },
  {
    number: "04",
    title: "The Play Space",
    use: "Games & Entertainment",
    tagline: "Make room for the things you enjoy.",
    description:
      "Create the entertainment room you have always wanted but never had space for inside the house. Pool, darts, gaming or somewhere for the whole family—the layout is shaped around you.",
    possibilities: [
      "Games room",
      "Pool and darts",
      "Family entertainment",
    ],
    image: "/images/lifestyle/games-room.png",
    imagePosition: "center",
  },
  {
    number: "05",
    title: "The Training Space",
    use: "Home Gym",
    tagline: "Your workout. Your schedule. Your space.",
    description:
      "A dedicated home gym removes the journey and gives you somewhere designed around the way you train. From free weights and cardio equipment to yoga and functional fitness, create a space that makes exercise easier to fit into everyday life.",
    possibilities: [
      "Home gym",
      "Yoga and wellness",
      "Training space",
    ],
    image: "/images/lifestyle/home-gym.png",
    imagePosition: "center",
  },
  {
    number: "06",
    title: "The Creative Space",
    use: "Studio & Retreat",
    tagline: "A little distance can make all the difference.",
    description:
      "Create a peaceful environment for creative work, hobbies, treatments or simply somewhere quiet that feels completely your own. The space can be tailored around how you want to use it.",
    possibilities: [
      "Creative studio",
      "Beauty and wellness",
      "Quiet retreat",
    ],
    image: "/images/lifestyle/creative-studio.png",
    imagePosition: "center",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* HERO */}

      <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-[#23352B] text-white">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Contemporary bespoke garden room inspiration"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#17251D]/95 via-[#23352B]/45 to-transparent" />

        <Container>
          <Reveal className="relative z-10 max-w-5xl pb-16 pt-36 md:pb-20">
            <p className="text-sm uppercase tracking-[0.35em] text-white/75">
              Garden Room Inspiration
            </p>

            <h1 className="mt-4 text-5xl font-normal leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Imagine what
              <br />
              your space could be.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              From focused workspaces to rooms for entertaining, training and
              switching off, explore what a bespoke garden room could make
              possible.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* INTRODUCTION */}

      <section className="bg-[#F7F5F2] py-16 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Start With An Idea
              </p>

              <h2 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
  <span className="block whitespace-nowrap">
    No catalogue.
  </span>

  <span className="mt-2 block whitespace-nowrap">
    No fixed formula.
  </span>
</h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-normal leading-8 text-[#23352B] md:text-2xl">
                The best starting point is not choosing a model. It is deciding
                what you would love to have more space for.
              </p>

              <p className="mt-5 text-base leading-7 text-[#2A2A2A]/70">
                Every garden, home and lifestyle is different. That is why we
                consider the size, layout, glazing, materials and finishes
                around what you actually want the room to do.
              </p>

              <p className="mt-4 text-base leading-7 text-[#2A2A2A]/70">
                The ideas below are not fixed designs or packages. They are
                simply inspiration for what your own space could become.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* INSPIRATION */}

      <section className="bg-[#F7F5F2] pb-16 md:pb-20">
        <Container>
          <div className="space-y-14 md:space-y-24">
            {ideas.map((idea, index) => (
              <article
                key={idea.title}
                className="border-t border-[#23352B]/10 pt-10 md:pt-12"
              >
                <div
                  className={`grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14 ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}

                  <Reveal
                    direction={index % 2 === 0 ? "left" : "right"}
                    className="lg:col-span-7"
                  >
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#D8D2C7]">
                      <Image
                        src={idea.image}
                        alt={`${idea.use} garden room inspiration`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className={`object-cover transition duration-1000 ease-out group-hover:scale-[1.03] ${
                          idea.imagePosition === "center"
                            ? "object-center"
                            : ""
                        }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                      <span className="absolute left-5 top-5 text-sm tracking-[0.2em] text-white/85 md:left-7 md:top-7">
                        {idea.number}
                      </span>

                      <p className="absolute bottom-5 left-5 right-5 max-w-xl text-xl font-normal leading-snug text-white md:bottom-7 md:left-7 md:text-2xl">
                        {idea.tagline}
                      </p>
                    </div>
                  </Reveal>

                  {/* Information */}

                  <Reveal
                    delay={0.12}
                    className="lg:col-span-5"
                  >
                    <p className="text-sm uppercase tracking-[0.25em] text-[#A7744A]">
                      {idea.use}
                    </p>

                    <h2 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-5xl">
                      {idea.title}
                    </h2>

                    <p className="mt-5 text-base leading-7 text-[#2A2A2A]/70">
                      {idea.description}
                    </p>

                    <div className="mt-6 border-t border-[#23352B]/10 pt-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#A7744A]">
                        Possibilities
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {idea.possibilities.map((possibility) => (
                          <span
                            key={possibility}
                            className="rounded-full border border-[#23352B]/15 px-4 py-2 text-sm text-[#23352B]/70"
                          >
                            {possibility}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/project-planner"
                      className="group mt-7 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-[#23352B]"
                    >
                      <span>Explore Your Idea</span>

                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </Link>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* BESPOKE STATEMENT */}

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
              Your Space
            </p>

            <blockquote className="mt-6 text-3xl font-normal leading-relaxed text-[#23352B] md:text-5xl md:leading-[1.3]">
              “The best garden room does not start with a model number. It
              starts with what you want the space to make possible.”
            </blockquote>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#2A2A2A]/60">
              Mix ideas, combine uses or start with something completely
              different. Bespoke means the space begins with you.
            </p>

            <Link
              href="/garden-rooms"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-[#23352B]"
            >
              <span>Explore Garden Rooms</span>

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* REAL PROJECTS STATEMENT */}

      <section className="bg-[#F7F5F2] py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Project Stories
              </p>

              <h2 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-6xl">
                Real spaces.
                <br />
                Real stories.
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="lg:col-span-6 lg:col-start-7"
            >
              <p className="text-xl font-normal leading-8 text-[#23352B] md:text-2xl">
                This page will continue to grow as we photograph completed
                garden rooms and document the stories behind them.
              </p>

              <p className="mt-5 text-base leading-7 text-[#2A2A2A]/70">
                Future case studies will explain how each space was designed,
                how it is used and the details that make every project
                individual.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Contemporary bespoke garden room at dusk"
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
                Start With Your Idea
              </p>

              <h2 className="mt-4 text-4xl font-normal leading-[1.05] text-white md:text-6xl lg:text-7xl">
                What would you
                <br />
                make space for?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                You do not need a finished design. Tell us what you would like
                your garden room to do and we will help you explore the
                possibilities.
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

              <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/50">
                Whether you have a clear plan or only the beginning of an idea,
                the first conversation is simply about understanding what you
                have in mind.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}