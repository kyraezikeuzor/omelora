import { SITE } from "@/lib/data";

/**
 * Tells Google the organization's name, logo and social profiles, and that
 * the site is called "Omelora". This is what search results use for the
 * site name and knowledge panel; sitelinks come from having clear pages.
 */
export function SiteSchema() {
  const sameAs = SITE.social.map((s) => s.href).filter((href) => href.startsWith("http"));
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "NGO",
      name: "Omelora",
      url: "https://omelora.org",
      logo: "https://omelora.org/imgs/opengraph.png",
      email: "contact@omelora.org",
      description:
        "Omelora is a youth-led nonprofit connecting volunteers worldwide to bridge gaps in education, sending school kits, books and care kits to underfunded schools and orphanages.",
      sameAs,
    },
    { "@context": "https://schema.org", "@type": "WebSite", name: "Omelora", url: "https://omelora.org" },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
