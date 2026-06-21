import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://claragromaches.com/sitemap.xml",
    host: "https://claragromaches.com",
  };
}
