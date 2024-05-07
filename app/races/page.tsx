import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getRaces } from "@/data/races";
import { Renderer } from "./render";
import { notFound } from "next/navigation";

const RACES = [
  "Humanoids",
  "Demi-Humanoids",
  "Creatures",
];

export default async function Races() {
  const { data } = await getRaces();

  if (!data)
    return notFound();

  return (
    <Tabs defaultValue="Humanoids" className="text-center">
      <TabsList>
        {RACES.map(race => (
          <TabsTrigger value={race}>
            {race}
          </TabsTrigger>
        ))}
      </TabsList>

      {RACES.map(race => (
        <TabsContent value={race}>
          <Renderer data={data.filter(({ role }) => role === race)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
