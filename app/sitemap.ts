import type { MetadataRoute } from "next";
import { getActiveProjects } from "@/lib/projects";

const SITE = "https://omelora.org";

/** Real pages only. Google ignores #anchors, so sections need their own pages to be listed. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getActiveProjects().catch(() => []);
  return [
    { url: SITE, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/why-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/projects`, changeFrequency: "daily", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${SITE}/projects/${project.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
