import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import LifestyleSection from "@/components/sections/LifestyleSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProcessSection from "@/components/sections/ProcessSection";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: {
    absolute:
      "Garden Rooms Bishop's Stortford | Stortford Garden Rooms",
  },

  description:
    "Bespoke garden rooms in Bishop's Stortford, Stansted and surrounding Essex & Hertfordshire. Designed and built for offices, gyms, studios and more.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Garden Rooms Bishop's Stortford | Stortford Garden Rooms",

    description:
      "Bespoke garden rooms in Bishop's Stortford, Stansted and surrounding Essex & Hertfordshire. Designed and built for offices, gyms, studios and more.",

    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />

      <LifestyleSection />

      <WhyChooseUs />

      <FeaturedProjects />

      <ProcessSection />

      <Testimonials />

      <ServiceAreas />

      <CTASection />
    </main>
  );
}