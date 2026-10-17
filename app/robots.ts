import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/projects/order"] },
    sitemap: "https://omelora.org/sitemap.xml",
    host: "https://omelora.org",
  };
}
