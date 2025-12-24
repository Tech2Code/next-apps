import AnimeDetailPage from "@/components/AnimeDetailPage";
import { getAnime } from "../action";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const [id] = params.slug.split("-");
  const anime = await getAnime(id);
  return {
    title: `${anime.name} - Detail page`,
    description: `Get detail information about ${anime.name}.`,
  };
}

export default async function page({ params }: Props) {
  // slug example: "20-naruto"
  const [id] = params.slug.split("-");

  // safety check
  if (!id) {
    notFound();
  }

  const anime = await getAnime(id);

  if (!anime) {
    notFound();
  }
  return <AnimeDetailPage anime={anime} />;
}
