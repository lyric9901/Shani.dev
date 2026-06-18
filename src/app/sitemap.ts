// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shani-dev.vercel.app';
  const targetCountries = ['in', 'us', 'ca', 'sa'];

  // Generate sitemap entries for localized routes automatically
  const localizedEntries = targetCountries.map((country) => ({
    url: `${baseUrl}/${country}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // High priority to push these targeted commercial keywords
  }));

  // Combine root page with regional landing pages
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...localizedEntries,
  ];
}