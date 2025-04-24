import { MetadataRoute } from "next";
import { db } from "@/server/db";
import { blogTable } from "@/server/db/schema";
import { peopleTable } from "@/server/db/schema";
import { workTable } from "@/server/db/schema";
import { slugify } from "@/lib/utils";
import { env } from "@/env";

// This function can fetch data from an API, database, or filesystem
async function fetchDynamicRoutes() {
  const blogData = await db.select().from(blogTable);
  const peopleData = await db.select().from(peopleTable);
  const workData = await db.select().from(workTable);

  const blogsSlug = blogData.map((item, i) => slugify(item.title));
  const workSlug = workData.map((item, i) => item.slug);
  const peopleSlug = peopleData.map((item, i) => item.slug);

  // For demonstration, returning mock data
  return {
    blogsSlug: [...new Set(blogsSlug)],
    workSlug: [...new Set(workSlug)],
    peopleSlug: [...new Set(peopleSlug)],
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXTAUTH_URL;

  // Your static routes
  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/contact-us`, lastModified: new Date() },
    { url: `${baseUrl}/our-blogs`, lastModified: new Date() },
    { url: `${baseUrl}/our-client-domains`, lastModified: new Date() },
    { url: `${baseUrl}/our-offer`, lastModified: new Date() },
    { url: `${baseUrl}/our-people`, lastModified: new Date() },
    { url: `${baseUrl}/our-profile`, lastModified: new Date() },
    { url: `${baseUrl}/our-work`, lastModified: new Date() },
  ];

  // Get dynamic routes
  const { blogsSlug, peopleSlug, workSlug } = await fetchDynamicRoutes();

  // Map dynamic routes to sitemap format
  const dynamicBlogEntry = blogsSlug.map((route) => ({
    url: `${baseUrl}/our-blogs/${route}`,
    lastModified: new Date(),
  }));
  const dynamicPeopleEntry = peopleSlug.map((route) => ({
    url: `${baseUrl}/our-people/${route}`,
    lastModified: new Date(),
  }));
  const dynamicWorkEntry = workSlug.map((route) => ({
    url: `${baseUrl}/our-work/${route}`,
    lastModified: new Date(),
  }));

  // Combine static and dynamic routes
  return [
    ...staticRoutes,
    ...dynamicWorkEntry,
    ...dynamicBlogEntry,
    ...dynamicPeopleEntry,
  ];
}
