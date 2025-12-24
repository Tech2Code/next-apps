import React from "react";
import AnimeCard from "./AnimeCard";
import { allAnimeFetch, fetchPosts } from "@/app/action";
import NewPagination from "./NewPagination";
import { AnimeProp } from "@/app/types";
import { notFound } from "next/navigation";

const postPerPage = 20;

const AnimePosts = async ({ pageNo }: { pageNo: number }) => {
  const data = await fetchPosts(pageNo, postPerPage);
  const totalCount = await allAnimeFetch();
  const totalPages = Math.ceil(totalCount / postPerPage);

  if (!data) throw new Error("No data found");

  if (isNaN(pageNo) || pageNo < 1 || pageNo > totalPages) {
    notFound();
  }

  return (
    <>
      <section className="grid place-items-center lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 min-h-[10vh]">
        {data?.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      {data.length > 1 && (
        <NewPagination
          basePath={"/"}
          currentPage={pageNo}
          totalPages={totalPages}
        />
      )}      
    </>
  );
};

export default AnimePosts;
