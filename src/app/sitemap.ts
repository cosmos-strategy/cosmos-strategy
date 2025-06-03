import { MetadataRoute } from "next";
import { db } from "@/server/db";
import { blogTable } from "@/server/db/schema";
import { peopleTable } from "@/server/db/schema";
import { workTable } from "@/server/db/schema";
import { slugify } from "@/lib/utils";
import { env } from "@/env";

// Make the sitemap dynamic to avoid build-time database calls
export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalidate every hour

// This function can fetch data from an API, database, or filesystem
async function fetchDynamicRoutes() {
  try {
    console.log("Fetching dynamic routes for sitemap...");

    // Create timeout promises for each query
    const createTimeoutPromise = (name: string) =>
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error(`${name} query timeout`)), 8000)
      );

    // Execute all queries concurrently with timeout protection
    const [blogData, peopleData, workData] = await Promise.allSettled([
      Promise.race([
        db
          .select({ title: blogTable.title, updatedAt: blogTable.updatedAt })
          .from(blogTable),
        createTimeoutPromise("Blog"),
      ]),
      Promise.race([
        db
          .select({ slug: peopleTable.slug, updatedAt: peopleTable.updatedAt })
          .from(peopleTable),
        createTimeoutPromise("People"),
      ]),
      Promise.race([
        db
          .select({ slug: workTable.slug, updatedAt: workTable.updatedAt })
          .from(workTable),
        createTimeoutPromise("Work"),
      ]),
    ]);

    // Process results and handle failures gracefully
    const blogs = blogData.status === "fulfilled" ? blogData.value : [];
    const people = peopleData.status === "fulfilled" ? peopleData.value : [];
    const work = workData.status === "fulfilled" ? workData.value : [];

    // Log any failures
    if (blogData.status === "rejected") {
      console.error("Blog data fetch failed:", blogData.reason);
    }
    if (peopleData.status === "rejected") {
      console.error("People data fetch failed:", peopleData.reason);
    }
    if (workData.status === "rejected") {
      console.error("Work data fetch failed:", workData.reason);
    }

    // Generate slugs
    const blogsSlug = blogs.map((item) => ({
      slug: slugify(item.title),
      lastModified: item.updatedAt || new Date(),
    }));

    const workSlug = work.map((item) => ({
      slug: item.slug,
      lastModified: item.updatedAt || new Date(),
    }));

    const peopleSlug = people.map((item) => ({
      slug: item.slug,
      lastModified: item.updatedAt || new Date(),
    }));

    console.log(
      `Successfully fetched: ${blogs.length} blogs, ${people.length} people, ${work.length} work items`
    );

    return {
      blogsSlug: blogsSlug.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.slug === item.slug)
      ),
      workSlug: workSlug.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.slug === item.slug)
      ),
      peopleSlug: peopleSlug.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.slug === item.slug)
      ),
    };
  } catch (error) {
    console.error("Failed to fetch dynamic routes:", error);
    // Return empty arrays as fallback
    return {
      blogsSlug: [],
      workSlug: [],
      peopleSlug: [],
    };
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXT_PUBLIC_APP_URL;

  // Your static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-client-domains`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-offer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-people`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-profile`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  try {
    // Get dynamic routes
    const { blogsSlug, peopleSlug, workSlug } = await fetchDynamicRoutes();

    // Map dynamic routes to sitemap format
    const dynamicBlogEntry: MetadataRoute.Sitemap = blogsSlug.map((item) => ({
      url: `${baseUrl}/our-blogs/${item.slug}`,
      lastModified: item.lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    const dynamicPeopleEntry: MetadataRoute.Sitemap = peopleSlug.map(
      (item) => ({
        url: `${baseUrl}/our-people/${item.slug}`,
        lastModified: item.lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      })
    );

    const dynamicWorkEntry: MetadataRoute.Sitemap = workSlug.map((item) => ({
      url: `${baseUrl}/our-work/${item.slug}`,
      lastModified: item.lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    const totalUrls =
      staticRoutes.length +
      dynamicBlogEntry.length +
      dynamicPeopleEntry.length +
      dynamicWorkEntry.length;
    console.log(`Generated sitemap with ${totalUrls} URLs`);

    // Combine static and dynamic routes
    return [
      ...staticRoutes,
      ...dynamicWorkEntry,
      ...dynamicBlogEntry,
      ...dynamicPeopleEntry,
    ];
  } catch (error) {
    console.error(
      "Sitemap generation failed, returning static pages only:",
      error
    );
    // Return only static routes if dynamic fetch fails
    return staticRoutes;
  }
}
