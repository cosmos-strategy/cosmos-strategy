import WorkFilter from "@/app/_components/work-filter";
import { workTable } from "@/server/db/schema";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface pageProps {
  params: { workId: string };
  searchParams: { query?: string };
}

export const metadata: Metadata = {
  title: "Our Work | Cosmos Strategy",
  description: "Our Work | Cosmos Strategy",
};

export const revalidate = 0; // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(workTable);
  return data;
}

const page = async ({ params, searchParams }: pageProps) => {
  const data = await getData();
  console.log(searchParams);
  const [work] = await db
    .select()
    .from(workTable)
    .where(eq(workTable.slug, params.workId))
    .limit(1);

  if (!work) notFound();
  return (
    <>
      <section className="w-screen  items-center justify-center bg-background pt-28 pb-4 md:pt-40 md:pb-16 flex ">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="font-heading text-secondary_heading text-secondary-foreground leading-[1] md:leading-[55px]">
                Some questions we have enjoyed answering
              </h2>
            </div>
            <div className="hidden items-center justify-center"></div>
          </div>
        </div>
      </section>

      <WorkFilter
        filteredWork={work}
        work={data}
        searchParams={searchParams.query}
      />
    </>
  );
};

export default page;
