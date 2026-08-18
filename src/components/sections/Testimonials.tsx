import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "From the very first conversation, the team understood exactly what we wanted. Our garden room has completely transformed the way we use our garden and has become our favourite space in the house.",
    name: "The Robinson Family",
    location: "Bishop's Stortford",
  },
  {
    quote:
      "The whole process was incredibly straightforward. The quality of the build and attention to detail were excellent, and the finished room is exactly what we hoped for.",
    name: "James & Sarah",
    location: "Stansted Mountfitchet",
  },
  {
    quote:
      "We wanted something that felt like a natural extension of our home rather than an outbuilding. The finished garden room is beautiful and has given us so much more usable space.",
    name: "The Williams Family",
    location: "Saffron Walden",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-20">
      <Container>
        {/* Section Introduction */}

        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
            Client Stories
          </p>

          <h2 className="mt-4 text-4xl font-light leading-tight text-[#23352B] md:text-6xl">
            What our clients say
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#2A2A2A]/65">
  Hear from homeowners across our local area about their experience of
  creating a bespoke garden room with Stortford Garden Rooms.
</p>
        </Reveal>

        {/* Featured Testimonial */}

        <Reveal
          delay={0.15}
          className="mx-auto mt-10 max-w-4xl text-center md:mt-12"
        >
          <div className="text-5xl font-light leading-none text-[#A7744A]/35 md:text-6xl">
            “
          </div>

          <blockquote className="mt-2 text-2xl font-light leading-relaxed text-[#23352B] md:text-3xl md:leading-relaxed">
            {testimonials[0].quote}
          </blockquote>

          <div className="mt-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#23352B]">
              {testimonials[0].name}
            </p>

            <p className="mt-1 text-sm text-[#2A2A2A]/60">
              {testimonials[0].location}
            </p>
          </div>
        </Reveal>

        {/* Supporting Testimonials */}

        <div className="mt-12 grid gap-8 border-t border-[#23352B]/10 pt-10 md:grid-cols-2">
          {testimonials.slice(1).map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={0.2 + index * 0.12}
              className={`pb-8 ${
                index === 0
                  ? "border-b border-[#23352B]/10 md:border-b-0 md:border-r md:pr-10"
                  : "md:pl-2"
              }`}
            >
              <div className="text-3xl font-light text-[#A7744A]/35">
                “
              </div>

              <blockquote className="mt-3 text-lg leading-8 text-[#23352B]">
                {testimonial.quote}
              </blockquote>

              <div className="mt-5">
                <p className="text-sm uppercase tracking-[0.15em] text-[#23352B]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-[#2A2A2A]/60">
                  {testimonial.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}