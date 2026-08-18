import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Bespoke Garden Room",

  description:
    "Use our Project Planner to tell us about your garden room ideas, preferred use, size, features, budget, timescale and location.",

  alternates: {
    canonical: "/project-planner",
  },

  openGraph: {
    title:
      "Plan Your Bespoke Garden Room | Stortford Garden Rooms",

    description:
      "Start planning your bespoke garden room and share your ideas, preferred size, features, budget, timescale and location.",

    url: "/project-planner",
  },
};

export default function ProjectPlannerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}