import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/garden-rooms",
    "/garden-room-prices",
    "/garden-rooms-bishops-stortford",
    "/inspiration",
    "/process",
    "/about",
    "/contact",
    "/project-planner",
    "/privacy",
    "/cookies",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/garden-rooms" ||
    route === "/garden-room-prices" ||
    route === "/garden-rooms-bishops-stortford" ||
    route === "/inspiration" ||
    route === "/process"
  ? 0.9
          : route === "/about" ||
              route === "/contact" ||
              route === "/project-planner"
            ? 0.8
            : 0.3,
  }));
}