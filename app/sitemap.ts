import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xaama.tech",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
  ];
}
