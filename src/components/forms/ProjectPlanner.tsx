"use client";

import {
  FormEvent,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";

type PlannerData = {
  use: string;
  size: string;
  features: string[];
  budget: string;
  timeframe: string;
  postcode: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  consent: boolean;
};

const initialData: PlannerData = {
  use: "",
  size: "",
  features: [],
  budget: "",
  timeframe: "",
  postcode: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
  consent: false,
};

const uses = [
  {
    title: "Home Office",
    description: "A dedicated space to focus and work.",
    image: "/images/lifestyle/home-office.png",
  },
  {
    title: "Garden Bar",
    description: "A space for entertaining and relaxing.",
    image: "/images/lifestyle/garden-bar.png",
  },
  {
    title: "Gym",
    description: "Your own private training space.",
    image: "/images/lifestyle/home-gym.png",
  },
  {
    title: "Cinema / Games Room",
    description: "Entertainment for family and friends.",
    image: "/images/lifestyle/cinema-room.png",
  },
  {
    title: "Studio",
    description: "A calm space for creativity, hobbies or treatments.",
    image: "/images/lifestyle/creative-studio.png",
  },
  {
    title: "Multi-purpose",
    description: "A flexible room designed for more than one use.",
    image: "/images/projects/garden-retreat.png",
  },
  {
    title: "Something Else",
    description: "Have a different idea? Tell us about it.",
    image: "/images/hero/garden-room-hero-v2.png",
  },
];

const sizes = [
  {
    title: "Compact",
    detail: "Up to approximately 10m²",
    description: "Ideal for a focused office or smaller garden.",
  },
  {
    title: "Medium",
    detail: "Approximately 10–20m²",
    description: "A versatile size for most garden room ideas.",
  },
  {
    title: "Large",
    detail: "Approximately 20–30m²",
    description: "More room for entertaining or multiple uses.",
  },
  {
    title: "Extra Large",
    detail: "30m²+",
    description: "For larger or higher-specification projects.",
  },
  {
    title: "Not Sure",
    detail: "We can help",
    description: "We'll help work out what suits your space.",
  },
];

const featureGroups = [
  {
    title: "Exterior",
    items: [
      "Cedar cladding",
      "Composite cladding",
      "Bifold doors",
      "Sliding doors",
      "French doors",
    ],
  },
  {
    title: "Comfort & Technology",
    items: [
      "Heating",
      "Air conditioning",
      "Enhanced lighting",
      "Internet / data",
    ],
  },
  {
    title: "Lifestyle",
    items: [
      "Bar or kitchenette",
      "TV / cinema setup",
      "Gym flooring",
      "Built-in storage",
    ],
  },
  {
    title: "Facilities",
    items: [
      "WC / cloakroom",
    ],
  },
];

const budgets = [
  {
    title: "£10,000–£20,000",
    description:
      "Ideal for smaller garden rooms and straightforward specifications.",
  },
  {
    title: "£20,000–£30,000",
    description:
      "Suitable for many bespoke garden room projects.",
  },
  {
    title: "£30,000+",
    description:
      "For larger spaces and higher-specification projects.",
  },
  {
    title: "Not sure yet",
    description:
      "That's absolutely fine — we can help you explore the options.",
  },
];

const timeframes = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "6+ months",
  "Just exploring",
];

const totalSteps = 7;

export default function ProjectPlanner() {
  const [step, setStep] = useState(1);
  const [data, setData] =
    useState<PlannerData>(initialData);
  const [submitted, setSubmitted] =
    useState(false);
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [submitError, setSubmitError] =
    useState("");

  const plannerRef =
    useRef<HTMLDivElement | null>(null);

  const updateField = <
    K extends keyof PlannerData,
  >(
    field: K,
    value: PlannerData[K],
  ) => {
    setData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleFeature = (
    feature: string,
  ) => {
    setData((current) => ({
      ...current,
      features:
        current.features.includes(feature)
          ? current.features.filter(
              (item) => item !== feature,
            )
          : [...current.features, feature],
    }));
  };

  const toggleUse = (use: string) => {
    setData((current) => {
      const selectedUses = current.use
        ? current.use.split(" | ")
        : [];

      const nextUses = selectedUses.includes(use)
        ? selectedUses.filter((item) => item !== use)
        : [...selectedUses, use];

      return {
        ...current,
        use: nextUses.join(" | "),
      };
    });
  };

  const canContinue = () => {
    switch (step) {
      case 1:
        return Boolean(data.use);

      case 2:
        return Boolean(data.size);

      case 3:
        return true;

      case 4:
        return Boolean(data.budget);

      case 5:
        return Boolean(data.timeframe);

      case 6:
        return Boolean(
          data.postcode.trim(),
        );

      case 7:
        return Boolean(
          data.name.trim() &&
            data.email.trim() &&
            data.phone.trim() &&
            data.consent,
        );

      default:
        return false;
    }
  };

  const scrollToPlanner = () => {
    plannerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const nextStep = () => {
    if (
      step < totalSteps &&
      canContinue()
    ) {
      setStep(
        (current) => current + 1,
      );

      setTimeout(() => {
        plannerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(
        (current) => current - 1,
      );

      setTimeout(() => {
        plannerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (
      !canContinue() ||
      isSubmitting
    ) {
      return;
    }

    if (!data.consent) {
      setSubmitError(
        "Please confirm that we may use your details to respond to your enquiry.",
      );

      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const response = await fetch(
        "/api/project-enquiry",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        },
      );

      const result =
        await response.json();

      if (
  !response.ok ||
  !result.success
) {
  throw new Error(
    result.message ||
      "We couldn't send your enquiry. Please try again."
  );
}

// Google Analytics — successful Project Planner enquiry
window.gtag?.("event", "generate_lead", {
  form_name: "project_planner",
  lead_type: "project_enquiry",
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
          : "We couldn't send your enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="relative min-h-[78vh] overflow-hidden bg-[#23352B]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Contemporary bespoke garden room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#17251D]/85" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-4xl items-center px-6 py-24 text-center lg:px-8">
          <div className="w-full">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-[#23352B]">
              ✓
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
              Project Received
            </p>

            <h1 className="mt-4 text-5xl font-normal leading-tight text-white md:text-7xl">
              Thank you, {data.name.trim().split(/\s+/)[0]}.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
              We&apos;ve received your garden room ideas and will be in
              touch to discuss your project and the next steps.
            </p>

            <div className="mx-auto mt-10 max-w-2xl border-y border-white/15 py-8 text-left">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-[#D8D2C7]">
                What Happens Next?
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-medium text-white">
                    1 — We review your project
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    We&apos;ll look through your ideas, preferred size,
                    features, budget and location.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    2 — We get in touch
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    A member of the Stortford Garden Rooms team will contact
                    you to talk through what you&apos;re looking to create.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    3 — We explore the possibilities
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    From there, we can discuss design, specification, site
                    considerations and the next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition hover:bg-[#F7F5F2]"
              >
                Return Home
              </Link>

              <Link
                href="/inspiration"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition hover:border-white/60"
              >
                Explore Inspiration
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const progress =
    (step / totalSteps) * 100;

  return (
    <>
      {/* HERO */}

      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-[#23352B] md:min-h-[68vh]">
        <Image
          src="/images/hero/garden-room-hero-v2.png"
          alt="Bespoke garden room project planner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#17251D]/95 via-[#23352B]/45 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-36 lg:px-8 md:pb-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/75">
              Project Planner
            </p>

            <h1 className="mt-4 text-5xl font-normal leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Start designing
              <br />
              your new space.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Tell us a little about the
              garden room you&apos;re
              imagining. It only takes a
              few simple steps and gives us
              a much better starting point
              for your project.
            </p>

            <button
              type="button"
              onClick={scrollToPlanner}
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#23352B] transition hover:bg-[#F7F5F2]"
            >
              Start Planning

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* PLANNER */}

      <section
        ref={plannerRef}
        className="scroll-mt-20 bg-[#F7F5F2] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* PROGRESS */}

          <div className="mb-12 md:mb-14">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#A7744A]">
                  Your Project
                </p>

                <p className="mt-2 text-sm text-[#23352B]/55">
                  Step {step} of{" "}
                  {totalSteps}
                </p>
              </div>

              <p className="text-2xl font-medium text-[#23352B]">
                {Math.round(progress)}%
              </p>
            </div>

            <div className="mt-5 h-[3px] overflow-hidden bg-[#23352B]/10">
              <div
                className="h-full bg-[#A7744A] transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="mt-4 hidden grid-cols-7 gap-2 md:grid">
              {Array.from(
                {
                  length: totalSteps,
                },
                (_, index) => {
                  const itemStep =
                    index + 1;

                  const active =
                    itemStep <= step;

                  return (
                    <div
                      key={itemStep}
                      className="flex items-center gap-2"
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] ${
                          active
                            ? "border-[#23352B] bg-[#23352B] text-white"
                            : "border-[#23352B]/20 text-[#23352B]/35"
                        }`}
                      >
                        {itemStep}
                      </span>
                    </div>
                  );
                },
              )}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
          >
            {/* STEP 1 */}

            {step === 1 && (
              <div>
                <StepHeader
                  eyebrow="Your Space"
                  title="What would you like to create?"
                  description="Select one or more options. We’ll use these to understand how you’d like your new space to work."
                />

                <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                  {uses.map((item) => (
                    <VisualOptionCard
                      key={item.title}
                      selected={
                        data.use
                          .split(" | ")
                          .includes(item.title)
                      }
                      title={item.title}
                      description={
                        item.description
                      }
                      image={item.image}
                      onClick={() =>
                        toggleUse(item.title)
                      }
                    />
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <div>
                <StepHeader
                  eyebrow="Approximate Size"
                  title="What size garden room are you considering?"
                  description="You don't need exact measurements at this stage. Choose whichever option feels closest."
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {sizes.map((item) => (
                    <OptionCard
                      key={item.title}
                      selected={
                        data.size ===
                        item.title
                      }
                      title={item.title}
                      detail={item.detail}
                      description={
                        item.description
                      }
                      onClick={() =>
                        updateField(
                          "size",
                          item.title,
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 */}

            {step === 3 && (
              <div>
                <StepHeader
                  eyebrow="Personalise Your Space"
                  title="What would you like to include?"
                  description="Choose as many or as few as you like. We can refine the details together later."
                />

                <div className="mt-10 space-y-8">
                  {featureGroups.map(
                    (group) => (
                      <div
                        key={
                          group.title
                        }
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-[#A7744A]">
                          {group.title}
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                          {group.items.map(
                            (
                              feature,
                            ) => {
                              const selected =
                                data.features.includes(
                                  feature,
                                );

                              return (
                                <button
                                  key={
                                    feature
                                  }
                                  type="button"
                                  onClick={() =>
                                    toggleFeature(
                                      feature,
                                    )
                                  }
                                  aria-pressed={
                                    selected
                                  }
                                  className={`flex min-h-20 items-center justify-between rounded-[1rem] border px-3 py-3 text-left text-sm transition duration-300 md:min-h-24 md:px-5 md:py-4 ${
                                    selected
                                      ? "border-[#23352B] bg-[#23352B] text-white"
                                      : "border-[#23352B]/12 bg-white text-[#23352B] hover:-translate-y-0.5 hover:border-[#23352B]/35"
                                  }`}
                                >
                                  <span>
                                    {
                                      feature
                                    }
                                  </span>

                                  <span
                                    className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                                      selected
                                        ? "border-white/30 bg-white text-[#23352B]"
                                        : "border-[#23352B]/15"
                                    }`}
                                  >
                                    {selected
                                      ? "✓"
                                      : "+"}
                                  </span>
                                </button>
                              );
                            },
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* STEP 4 */}

            {step === 4 && (
              <div>
                <StepHeader
                  eyebrow="Budget"
                  title="What budget are you considering?"
                  description="An approximate range helps us understand the right approach and specification for your project."
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {budgets.map(
                    (item) => (
                      <OptionCard
                        key={item.title}
                        selected={
                          data.budget ===
                          item.title
                        }
                        title={
                          item.title
                        }
                        description={
                          item.description
                        }
                        onClick={() =>
                          updateField(
                            "budget",
                            item.title,
                          )
                        }
                      />
                    ),
                  )}
                </div>
              </div>
            )}

            {/* STEP 5 */}

            {step === 5 && (
              <div>
                <StepHeader
                  eyebrow="Timing"
                  title="When would you like to get started?"
                  description="You don't need a fixed date at this stage — just choose the option that feels closest."
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {timeframes.map(
                    (timeframe) => (
                      <OptionCard
                        key={
                          timeframe
                        }
                        selected={
                          data.timeframe ===
                          timeframe
                        }
                        title={
                          timeframe
                        }
                        onClick={() =>
                          updateField(
                            "timeframe",
                            timeframe,
                          )
                        }
                      />
                    ),
                  )}
                </div>
              </div>
            )}

            {/* STEP 6 */}

            {step === 6 && (
              <div>
                <StepHeader
                  eyebrow="Location"
                  title="Where is your project?"
                  description="Your postcode helps us understand where your project is located and how we can best help."
                />

                <div className="mt-10 grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <label
                      htmlFor="postcode"
                      className="text-sm uppercase tracking-[0.2em] text-[#23352B]"
                    >
                      Project postcode
                    </label>

                    <input
                      id="postcode"
                      type="text"
                      autoComplete="postal-code"
                      value={
                        data.postcode
                      }
                      onChange={(
                        event,
                      ) =>
                        updateField(
                          "postcode",
                          event.target
                            .value,
                        )
                      }
                      placeholder="Enter your postcode"
                      className="mt-4 w-full border-b border-[#23352B]/30 bg-transparent px-0 py-4 text-2xl font-normal text-[#23352B] outline-none transition placeholder:text-[#23352B]/25 focus:border-[#A7744A]"
                    />

                    <p className="mt-5 max-w-xl text-sm leading-6 text-[#2A2A2A]/50">
                      We&apos;re based in
                      Stansted Mountfitchet
                      and work with homeowners
                      across Essex, Hertfordshire
                      and surrounding areas.
                    </p>
                  </div>

                  <div className="relative hidden min-h-64 overflow-hidden rounded-[1.5rem] lg:col-span-5 lg:block">
                    <Image
                      src="/images/projects/garden-retreat.png"
                      alt="Garden room in a residential garden"
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 7 */}

            {step === 7 && (
              <div>
                <StepHeader
                  eyebrow="Final Step"
                  title="Almost there. Let’s bring your project to life."
                  description="Add your contact details below and we’ll review your ideas and get in touch to discuss the next steps."
                />

                <div className="mt-8 grid gap-x-8 gap-y-5 md:mt-10 md:grid-cols-2 md:gap-y-8">
                  <FormField
                    label="Your name"
                    id="name"
                    type="text"
                    value={data.name}
                    autoComplete="name"
                    required
                    onChange={(
                      value,
                    ) =>
                      updateField(
                        "name",
                        value,
                      )
                    }
                  />

                  <FormField
                    label="Telephone"
                    id="phone"
                    type="tel"
                    value={
                      data.phone
                    }
                    autoComplete="tel"
                    required
                    onChange={(
                      value,
                    ) =>
                      updateField(
                        "phone",
                        value,
                      )
                    }
                  />

                  <div className="md:col-span-2">
                    <FormField
                      label="Email address"
                      id="email"
                      type="email"
                      value={
                        data.email
                      }
                      autoComplete="email"
                      required
                      onChange={(
                        value,
                      ) =>
                        updateField(
                          "email",
                          value,
                        )
                      }
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="notes"
                      className="text-sm uppercase tracking-[0.2em] text-[#23352B]"
                    >
                      Anything else you&apos;d
                      like us to know?

                      <span className="ml-2 normal-case tracking-normal text-[#23352B]/40">
                        Optional
                      </span>
                    </label>

                    <textarea
                      id="notes"
                      rows={4}
                      value={data.notes}
                      onChange={(
                        event,
                      ) =>
                        updateField(
                          "notes",
                          event.target
                            .value,
                        )
                      }
                      placeholder="Tell us anything else about your garden, your ideas or what you'd like your new space to become..."
                      className="mt-4 w-full resize-none rounded-[1rem] border border-[#23352B]/15 bg-white p-5 text-base leading-7 text-[#23352B] outline-none transition placeholder:text-[#23352B]/30 focus:border-[#A7744A]"
                    />
                  </div>

                  {/* PROJECT SUMMARY */}

                  <div className="md:col-span-2">
                    <div className="rounded-[1.5rem] bg-white p-7 md:p-8">
                      <div className="border-b border-[#23352B]/10 pb-6">
  <p className="text-xs uppercase tracking-[0.22em] text-[#A7744A]">
    Your Project
  </p>

  <div className="mt-2 flex items-end justify-between gap-4">
    <h2 className="text-2xl font-normal leading-tight text-[#23352B] md:text-3xl">
      Your garden room so far.
    </h2>

    <button
      type="button"
      onClick={() => setStep(1)}
      className="shrink-0 pb-0.5 text-sm text-[#23352B]/55 underline-offset-4 transition hover:text-[#23352B] hover:underline"
    >
      Edit selections
    </button>
  </div>
</div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <SummaryItem
                          label="Use"
                          value={
                            data.use
                              ? data.use.replaceAll(
                                  " | ",
                                  ", ",
                                )
                              : "Not specified"
                          }
                        />

                        <SummaryItem
                          label="Size"
                          value={
                            data.size
                          }
                        />

                        <SummaryItem
                          label="Budget"
                          value={
                            data.budget
                          }
                        />

                        <SummaryItem
                          label="Timing"
                          value={
                            data.timeframe
                          }
                        />

                        <SummaryItem
                          label="Location"
                          value={
                            data.postcode
                          }
                        />

                        <SummaryItem
                          label="Features"
                          value={
                            data.features
                              .length
                              ? data.features.join(
                                  ", ",
                                )
                              : "Not specified"
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
  <label className="flex cursor-pointer items-start gap-3">
    <input
      type="checkbox"
      checked={data.consent}
      onChange={(event) =>
        updateField(
          "consent",
          event.target.checked,
        )
      }
      className="mt-1 h-4 w-4 shrink-0 accent-[#23352B]"
    />

    <span className="text-sm leading-6 text-[#2A2A2A]/65">
      I agree that Stortford Garden Rooms may use my details to respond
      to my enquiry and discuss my project.{" "}
      <Link
        href="/privacy"
        className="underline underline-offset-2 transition hover:text-[#23352B]"
      >
        Privacy Policy
      </Link>
      <span className="text-[#A7744A]"> *</span>
    </span>
  </label>
</div>
                </div>
              </div>
            )}

            {submitError && (
              <div
                role="alert"
                className="mt-8 rounded-[1rem] border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-800"
              >
                {submitError}
              </div>
            )}

            {/* NAVIGATION */}

            <div className="mt-12 flex items-center justify-between border-t border-[#23352B]/10 pt-7">
              <div>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={
                      previousStep
                    }
                    className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-[#23352B]/60 transition hover:text-[#23352B]"
                  >
                    <span className="transition-transform group-hover:-translate-x-1">
                      ←
                    </span>

                    Back
                  </button>
                )}
              </div>

              {step < totalSteps ? (
                <button
                  type="button"
                  disabled={
                    !canContinue()
                  }
                  onClick={nextStep}
                  className="group inline-flex items-center gap-4 rounded-full bg-[#23352B] px-7 py-4 text-sm font-medium text-white transition duration-300 enabled:hover:bg-[#314936] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Continue

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={
                    !canContinue() ||
                    isSubmitting
                  }
                  className="group inline-flex items-center gap-4 rounded-full bg-[#23352B] px-7 py-4 text-sm font-medium text-white transition duration-300 enabled:hover:bg-[#314936] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {isSubmitting
                    ? "Sending Your Project..."
                    : "Submit My Project"}

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

type StepHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function StepHeader({
  eyebrow,
  title,
  description,
}: StepHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-[#A7744A]">
        {eyebrow}
      </p>

      <h1 className="mt-4 text-4xl font-normal leading-tight text-[#23352B] md:text-6xl">
        {title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#2A2A2A]/65 md:text-lg md:leading-8">
        {description}
      </p>
    </div>
  );
}

type VisualOptionCardProps = {
  selected: boolean;
  title: string;
  description: string;
  image: string;
  onClick: () => void;
};

function VisualOptionCard({
  selected,
  title,
  description,
  image,
  onClick,
}: VisualOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border text-left transition duration-300 ${
        selected
          ? "border-[#23352B] ring-2 ring-[#23352B]"
          : "border-transparent hover:-translate-y-1"
      }`}
    >
      <Image
  src={image}
  alt={title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover transition duration-700 group-hover:scale-[1.04]"
/>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-6">
  <div className="flex items-end justify-between gap-2 sm:gap-5">
    <div className="min-w-0">
      <h2 className="text-[15px] font-normal leading-tight sm:text-2xl">
        {title}
      </h2>

      <p className="mt-2 hidden max-w-sm text-sm leading-6 text-white/70 sm:block">
        {description}
      </p>
    </div>

    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs sm:h-8 sm:w-8 sm:text-sm ${
        selected
          ? "border-white bg-white text-[#23352B]"
          : "border-white/40 text-white"
      }`}
    >
      {selected ? "✓" : "+"}
    </span>
  </div>
</div>
    </button>
  );
}

type OptionCardProps = {
  selected: boolean;
  title: string;
  detail?: string;
  description?: string;
  onClick: () => void;
};

function OptionCard({
  selected,
  title,
  detail,
  description,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group min-h-0 rounded-[1.25rem] border p-5 text-left transition duration-300 md:min-h-32 md:p-6 ${
        selected
          ? "border-[#23352B] bg-[#23352B] text-white"
          : "border-[#23352B]/12 bg-white text-[#23352B] hover:-translate-y-0.5 hover:border-[#23352B]/35"
      }`}
    >
      <div className="flex items-start justify-between gap-4 md:gap-6">
        <div>
          <h2 className="text-xl font-normal md:text-2xl">
            {title}
          </h2>

          {detail && (
            <p
              className={`mt-2 text-sm ${
                selected
                  ? "text-white/60"
                  : "text-[#A7744A]"
              }`}
            >
              {detail}
            </p>
          )}

          {description && (
            <p
              className={`mt-3 max-w-md text-sm leading-6 ${
                selected
                  ? "text-white/65"
                  : "text-[#2A2A2A]/60"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs md:h-7 md:w-7 md:text-sm ${
            selected
              ? "border-white/40 bg-white text-[#23352B]"
              : "border-[#23352B]/20"
          }`}
        >
          {selected ? "✓" : ""}
        </span>
      </div>
    </button>
  );
}

type FormFieldProps = {
  label: string;
  id: string;
  type: string;
  value: string;
  autoComplete?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function FormField({
  label,
  id,
  type,
  value,
  autoComplete,
  required = false,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm uppercase tracking-[0.2em] text-[#23352B]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#A7744A]">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="mt-2 w-full border-b border-[#23352B]/25 bg-transparent px-0 py-2 text-lg font-normal text-[#23352B] outline-none transition focus:border-[#A7744A] md:mt-4 md:py-3 md:text-xl"
      />
    </div>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-[#A7744A]">
        {label}
      </p>

      <p className="mt-2 text-sm leading-6 text-[#23352B]/75">
        {value || "Not specified"}
      </p>
    </div>
  );
}