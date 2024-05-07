import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getMilitary } from "@/data/military";
import { notFound } from "next/navigation";
import { Render } from "./render";

const ids = [
  "crusaders",
  "guardians",
  "warrior monks",
  "crimson squad",
  "chocobo knights",
];

export default async function Military() {
  const { data } = await getMilitary();

  if (!data)
    return notFound();

  return (
    <Tabs defaultValue={ids[0]} className="text-center">
      <TabsList>
        {ids.map(id => (
          <TabsTrigger value={id}>{id}</TabsTrigger>
        ))}
      </TabsList>

      {ids.map(id => (
        <TabsContent value={id}>
          <Render data={data.filter(({ role }) => role.toLowerCase() === id)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
