import type { MetadataRoute } from "next";

const baseUrl = "https://jasmineglobalexport.com";

const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/faq",
  "/gallery",
  "/other-makes",
  "/price-list",
  "/privacy",
  "/procedure",
  "/quote",
  "/shipping",
  "/specs",
  "/terms",
  "/testimonials",
  "/trust",
] as const;

const blogArticleLinks = [
  "/shipping",
  "/procedure",
  "/specs",
  "/price-list",
  "/faq",
  "/quote",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [...staticRoutes, ...blogArticleLinks].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return urls;
}
