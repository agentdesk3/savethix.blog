import type { MetadataRoute } from "next";

const siteUrl = "https://blog.savethisx.net";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog/how-to-download-tiktok-videos-iphone/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/how-to-download-tiktok-videos-without-watermark/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/how-to-download-instagram-reels/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/why-cant-i-download-tiktok-videos/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },    {
      url: `${siteUrl}/blog/how-to-download-instagram-videos-pc/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/how-to-save-instagram-videos-to-gallery/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}