import AnimePosts from "@/components/AnimePosts";

export default function Home() {
  
  return (
    <div className="sm:px-16 py-8 px-4 flex flex-col gap-5 ">
      <AnimePosts pageNo={1} />
    </div>
  );
}
