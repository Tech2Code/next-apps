import SearchPosts from "@/components/SearchPosts";

interface PageProps {
  params: { query: string; page: string };
  // searchParams: { [key: string]: string | undefined };
}

export async function generateMetadata({ params }: PageProps) {
  const query = params.query || "Search";

  return {
    title: `${query} - Search Results`,
    description: `Search results for ${query}`,
  };
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
    <div className="sm:px-16 py-8 px-4 flex flex-col gap-5">
      <h2 className="text-2xl text-white">
        Search results for:{" "}
        <span className="red-gradient font-bold">{query}</span>
      </h2>
      <SearchPosts query={query} pageNo={pageNo} />
    </div>
  );
}
