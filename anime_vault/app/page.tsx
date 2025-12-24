import AnimePosts from "@/components/AnimePosts";
import Loader from "@/components/Loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="sm:px-16 py-8 px-4 flex flex-col gap-5 flex-1 min-h-[35vh]">
      <Suspense fallback={<Loader />}>
        <AnimePosts pageNo={1} />
      </Suspense>
    </div>
  );
}
