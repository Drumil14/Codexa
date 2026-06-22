import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return NAV_ITEMS.map((item) => ({
    url: `${SITE.domain}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
