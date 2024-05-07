import { getCharacterData } from "@/data/character";
import { notFound } from "next/navigation";

type Props = {
  params: {
    characterId: string;
  };
};

export default async function Page({ params }: Props) {
  const { data } = await getCharacterData(params.characterId);

  if (!data)
    return notFound();

  return (
    <div>
      <div key={data.id}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
