import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";

const lifestyleRooms = [
  {
    title: "Home Offices",
    tagline: "Work from home. Without feeling at home.",
    description:
      "Create the separation you need to focus properly. A quiet, comfortable workspace just a few steps from your back door — without sacrificing a bedroom or taking over the kitchen table.",
    image: "/images/lifestyle/home-office.png",
  },
  {
    title: "Garden Bars",
    tagline: "Give everyone a reason to stay a little longer.",
    description:
      "Create your own place to entertain, unwind and spend time with the people who matter — from relaxed summer evenings to drinks with friends long after the sun goes down.",
    image: "/images/lifestyle/garden-bar.png",
  },
  {
    title: "Cinema Rooms",
    tagline: "Make staying in the new going out.",
    description:
      "Your own dedicated escape for films, box sets, big matches and family movie nights — designed to make an ordinary evening at home feel anything but ordinary.",
    image: "/images/lifestyle/cinema-room.png",
  },
  {
    title: "Games Rooms",
    tagline: "A space everyone actually wants to use.",
    description:
      "Pool table, gaming setup, darts, golf simulator or somewhere for the whole family to hang out. Build the entertainment space you've never had room for inside the house.",
    image: "/images/lifestyle/games-room.png",
  },
  {
    title: "Home Gyms",
    tagline: "Train when you want. No commute required.",
    description:
      "Turn the walk to the gym into a few steps across the garden. Create a private fitness space designed around the way you train, your equipment and your routine.",
    image: "/images/lifestyle/home-gym.png",
  },
  {
    title: "Beauty & Wellness",
    tagline: "Create a calm space of your own.",
    description:
      "A peaceful, professional environment for beauty treatments, wellness or a home-based business — separate from the house and designed around you and your clients.",
    image: "/images/lifestyle/creative-studio.png",
  },
];

export default function LifestyleSection() {
  return (
    <section
      id="lifestyle"
      className="bg-[#F7F5F2] py-16 md:py-20"
    >
      <Container>
        {/* Section Introduction */}

        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
            What Could Your Space Become?
          </p>

          <h2 className="mt-4 text-4xl font-light leading-tight text-[#23352B] md:text-6xl">
            Designed around
            <br />
            the way you live.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#2A2A2A]/70">
  A bespoke garden room can change how you use your home — creating
  dedicated space to work, exercise, entertain, relax and spend your time.
</p>
        </Reveal>

        {/* Lifestyle Grid */}

        <div className="mt-14 grid gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {lifestyleRooms.map((room, index) => (
            <Reveal
              key={room.title}
              delay={index * 0.08}
              className="group"
            >
              <Link
                href="/garden-rooms"
                className="block"
              >
                {/* Image */}

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#D8D2C7] shadow-[0_18px_45px_rgba(35,53,43,0.08)] transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-[0_26px_55px_rgba(35,53,43,0.14)]">
                  <Image
                    src={room.image}
                    alt={`${room.title} garden room inspiration`}
                    fill
                    sizes="(max-width:768px) 100vw,
       (max-width:1200px) 50vw,
       33vw"
                    className="object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/80 via-black/5 to-transparent transition duration-500 group-hover:from-[#17251D]/90" />

                  {/* Number */}

                  <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 text-xs tracking-[0.15em] text-white/80 backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Text */}

                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-3xl font-light text-white">
                      {room.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                      {room.tagline}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/90">
                      <span>Explore</span>

                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </span>
                  </div>
                </div>

                {/* Description */}

                <div className="px-2 pt-4">
                  <p className="text-base leading-7 text-[#2A2A2A]/70">
                    {room.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Section CTA */}

        <Reveal
          delay={0.15}
          className="mt-14 flex flex-col items-center border-t border-[#23352B]/10 pt-8 text-center md:mt-16"
        >
          <p className="max-w-xl text-xl font-light leading-8 text-[#23352B] md:text-2xl">
            Have something completely different in mind?
          </p>

          <p className="mt-3 max-w-xl text-base leading-7 text-[#2A2A2A]/60">
            That&apos;s the benefit of bespoke. Tell us what you&apos;d like the space
            to do and we&apos;ll help you explore what&apos;s possible.
          </p>

          <Link
            href="/project-planner"
            className="group mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#23352B]"
          >
            <span>Tell Us Your Idea</span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}