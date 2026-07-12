import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://omshivadrivingschool.in";
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/courses`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/gallery`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${base}/traffic-signs`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms-of-service`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const locationSlugs = [
    "peenya",
    "jalahalli",
    "dasarahalli",
    "chokkasandra",
    "nagasandra",
  ];

  const locationPages = locationSlugs.map((slug) => ({
    url: `${base}/location/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...locationPages,
  ];
}
