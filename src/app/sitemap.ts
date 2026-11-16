import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/projects";

export const dynamic = "force-static";

/** sitemap.xml with the single page of the site. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 }];
}
