"use client";

import {
  FormEvent,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";

export default function ContactPage() {
  const [name, setName] =
    useState("");
  const [email, setEmail] =
    useState("");
  const [phone, setPhone] =
    useState("");
  const [message, setMessage] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
const faxNumber = String(formData.get("fax_number") || "");

    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const response = await fetch(
        "/api/contact-enquiry",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            faxNumber,
          }),
        }
      );

      const result =
        await response.json();

            if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "We couldn't send your message. Please try again."
        );
      }

      // Google Analytics — successful contact enquiry
window.gtag?.("event", "generate_lead", {
  form_name: "contact_form",
  lead_type: "general_enquiry",
});

setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main>
        <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#23352B]">
          <Image
            src="/images/hero/garden-room-hero-v2.png"
            alt="Contemporary bespoke garden room"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#17251D]/85" />

          <Container>
            <div className="relative z-10 mx-auto max-w-3xl py-24 text-center text-white">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-[#23352B]">
                ✓
              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
                Message Received
              </p>

              <h1 className="mt-4 text-5xl font-normal leading-tight md:text-7xl">
                Thanks, {name}.
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
                Your message has been sent
                successfully. We&apos;ll review
                it and get back to you as soon
                as we can.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition hover:bg-[#F7F5F2]"
                >
                  Return Home
                </Link>

                <Link
                  href="/garden-rooms"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition hover:border-white/60"
                >
                  Explore Garden Rooms
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* HERO */}

      <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Contemporary bespoke garden room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#17251D]/95 via-[#23352B]/45 to-transparent" />

        <Container>
          <Reveal className="relative z-10 max-w-4xl pb-14 pt-36 text-white md:pb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-white/75">
              Get In Touch
            </p>

            <h1 className="mt-4 text-5xl font-normal leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Let&apos;s talk.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
  Have a question or want to discuss your garden room project?
  Send us a message and we&apos;ll get back to you to talk through
  your ideas.
</p>
          </Reveal>
        </Container>
      </section>

      {/* CONTACT */}

      <section className="bg-[#F7F5F2] pt-16 pb-10 md:pt-20 md:pb-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* INTRODUCTION */}

            <Reveal className="lg:col-span-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
                Contact Us
              </p>

              <h1 className="mt-6 text-4xl font-light leading-tight text-[#23352B] md:text-5xl">
  <span className="block whitespace-nowrap">
    Have a question?
  </span>

  <span className="mt-2 block">
    Let&apos;s talk.
  </span>
</h1>

<p className="mt-6 max-w-md text-base leading-7 text-[#2A2A2A]/70">
  Whether you have a quick question, want some advice or simply want to
  talk through an idea, send us a message and we&apos;ll be happy to help.
</p>

              <div className="mt-8 border-t border-[#23352B]/10 pt-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A7744A]">
                    Based In
                  </p>

                  <p className="mt-2 text-[#23352B]">
                    Stansted Mountfitchet & Bishop&apos;s Stortford
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A7744A]">
                    Areas We Cover
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-7 text-[#2A2A2A]/65">
                    Stansted Mountfitchet, Bishop&apos;s Stortford,
                    Saffron Walden, Great
                    Dunmow, Takeley,
                    Sawbridgeworth, Harlow
                    and surrounding areas
                    across Essex and
                    Hertfordshire.
                  </p>
                </div>
              </div>

              {/* PLANNER CTA */}

<div className="mt-8 rounded-[1.5rem] bg-[#23352B] p-7 text-white">
  <p className="text-xs uppercase tracking-[0.2em] text-[#D8D2C7]">
    Planning A Garden Room?
  </p>

  <h3 className="mt-3 text-2xl font-normal">
    Tell us about your project.
  </h3>

  <p className="mt-3 text-sm leading-6 text-white/65">
    If you&apos;re considering a garden room, our Project Planner is the
    best place to start. Tell us about the space you&apos;re imagining,
    your preferred use, approximate size, features, budget and timescale.
  </p>

  <Link
    href="/project-planner"
    className="group mt-6 inline-flex items-center gap-3 text-sm font-medium text-white"
  >
    Start Your Project

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>
</Reveal>

            {/* FORM */}

            <Reveal
              delay={0.15}
              className="lg:col-span-7 lg:col-start-6"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-[1.5rem] bg-white p-7 md:p-10"
              >
               {/* Spam protection — hidden honeypot */}
<div
  className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
  aria-hidden="true"
>
  <label htmlFor="fax_number">
    Fax number
  </label>

  <input
    type="text"
    id="fax_number"
    name="fax_number"
    tabIndex={-1}
    autoComplete="new-password"
  />
</div>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-8">
                  {/* NAME */}

                  <div className="md:col-span-2">
                    <label
                      htmlFor="name"
                      className="text-sm uppercase tracking-[0.18em] text-[#23352B]"
                    >
                      Your Name
                      <span className="ml-1 text-[#A7744A]">
                        *
                      </span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(event) =>
                        setName(
                          event.target.value
                        )
                      }
                      className="mt-3 w-full border-0 border-b border-[#23352B]/20 bg-transparent px-0 py-3 text-xl text-[#23352B] outline-none transition focus:border-[#A7744A]"
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm uppercase tracking-[0.18em] text-[#23352B]"
                    >
                      Email Address
                      <span className="ml-1 text-[#A7744A]">
                        *
                      </span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(
                          event.target.value
                        )
                      }
                      className="mt-3 w-full border-0 border-b border-[#23352B]/20 bg-transparent px-0 py-3 text-xl text-[#23352B] outline-none transition focus:border-[#A7744A]"
                    />
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm uppercase tracking-[0.18em] text-[#23352B]"
                    >
                      Telephone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(event) =>
                        setPhone(
                          event.target.value
                        )
                      }
                      className="mt-3 w-full border-0 border-b border-[#23352B]/20 bg-transparent px-0 py-3 text-xl text-[#23352B] outline-none transition focus:border-[#A7744A]"
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm uppercase tracking-[0.18em] text-[#23352B]"
                    >
                      Your Message
                      <span className="ml-1 text-[#A7744A]">
                        *
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={message}
                      onChange={(event) =>
                        setMessage(
                          event.target.value
                        )
                      }
                      placeholder="How can we help?"
                      className="mt-4 w-full resize-none rounded-[1rem] border border-[#23352B]/15 bg-[#F7F5F2] p-5 text-base leading-7 text-[#23352B] outline-none transition placeholder:text-[#23352B]/30 focus:border-[#A7744A]"
                    />
                  </div>
                </div>

                {submitError && (
                  <div
                    role="alert"
                    className="mt-6 rounded-[1rem] border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800"
                  >
                    {submitError}
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-4 border-t border-[#23352B]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-[#2A2A2A]/45">
  Your details will only be used to respond to your enquiry. See our{" "}
  <Link
    href="/privacy"
    className="underline underline-offset-2 transition hover:text-[#23352B]"
  >
    Privacy Policy
  </Link>
  .
</p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#23352B] px-8 py-4 text-sm font-medium text-white transition duration-300 enabled:hover:bg-[#314936] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting
                        ? "Sending..."
                        : "Send Message"}
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}