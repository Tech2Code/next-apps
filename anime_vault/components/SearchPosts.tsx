import { AnimeProp } from "@/app/types";
import AnimeCard from "./AnimeCard";
import NewPagination from "./NewPagination";
import { allfetchSearch, fetchSearch } from "@/app/action";
import { slugify } from "@/app/lib/fun";

const postPerPage = 20;

type SearchPostsProps = {
  query: string;
  pageNo: number;
};

const SearchPosts = async ({ query, pageNo }: SearchPostsProps) => {
  const data = await fetchSearch(query, pageNo, postPerPage);
  const totalCount = await allfetchSearch(query);
  const totalPages = Math.ceil(totalCount / postPerPage);

  return (
    <>
      <section
        id="searchPosts"
        className="grid place-items-center lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 min-h-[10vh]"
      >
        {data?.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
        {data.length === 0 && (
          <p className="col-span-full text-white text-xl text-center">
            No results found.
          </p>
        )}
      </section>

      {totalPages > 1 && (
        <NewPagination
          basePath={`/search/${slugify(query)}/`}
          currentPage={pageNo}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default SearchPosts;
