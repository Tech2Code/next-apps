import { slugify } from "@/app/lib/fun";
import SearchPosts from "@/components/SearchPosts";
import { redirect } from "next/navigation";

interface PageProps {
  params: { query: string; page: string };
  // searchParams: { [key: string]: string | undefined };
}

export default function SearchPage({ params }: PageProps) {
  const query = decodeURIComponent(params.query).replace(/-/g, " ");
  const pageNo = Number(params.page || 1);

  if (!query) {
    return (
      <div className="p-8 text-white">
        <h2 className="text-2xl">Enter a search query...</h2>
      </div>
    );
  }

  return (
    <div className="sm:px-16 py-8 px-4 flex flex-col gap-5 flex-1 min-h-[35vh]">
      <h2 className="text-2xl text-white">
        Search results for:{" "}
        <span className="red-gradient font-bold">{query}</span>
      </h2>
      <SearchPosts query={query} pageNo={pageNo} />
    </div>
  );
}
