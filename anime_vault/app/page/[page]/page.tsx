import AnimePosts from "@/components/AnimePosts";
import { redirect } from "next/navigation";

type PageProps = {
  params: { page: string };
};

export async function generateMetadata({ params }: PageProps) {
  const pageNo = Number(params.page || 1);
  return {
    title: `Page ${pageNo} - Anime Vault - Home Page`,
    description: `Your favorite anime, all in one place.`,
  };
}

async function page({ params }: PageProps) {
  const pageNo = Number(params.page || 1);

  if (pageNo === 1) {
    redirect("/");
  }

  return (
    <div className="sm:px-16 py-8 px-4 flex flex-col gap-5">
      <AnimePosts pageNo={pageNo} />
    </div>
  );
}

export default page;
