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
      "Bespoke Garden Rooms in Essex & Hertfordshire | Stortford Garden Rooms",
  },

  description:
    "Bespoke garden rooms designed and built across Essex and Hertfordshire. Create a beautifully considered home office, gym, studio or entertainment space.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Bespoke Garden Rooms in Essex & Hertfordshire | Stortford Garden Rooms",

    description:
      "Bespoke garden rooms designed and built across Essex and Hertfordshire. Create a beautifully considered home office, gym, studio or entertainment space.",

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