import { slugify } from "@/app/lib/fun";
import SearchPosts from "@/components/SearchPosts";
import { redirect } from "next/navigation";

interface PageProps {
  params: { query: string; page: string };
  // searchParams: { [key: string]: string | undefined };
}

export default function Page({ params }: PageProps) {
  const query = decodeURIComponent(params.query).replace(/-/g, " ");
  const pageNo = Number(params.page || 1);

  const slugifyQuery = slugify(query);

  // 🔥 SEO rule: redirect page 1
  if (pageNo === 1) {
    redirect(`/search/${slugifyQuery}`);
  }

  return (
    <div className="sm:px-16 py-8 px-4 flex flex-col gap-10 flex-1 min-h-[35vh]">
      <h2 className="text-2xl text-white">
        Search results for:{" "}
        <span className="red-gradient font-bold">{query}</span>
      </h2>
      <SearchPosts query={query} pageNo={pageNo} />
    </div>
  );
}
