import PlayersTable from "@/components/players-table";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { getPlayers } from "@/data/players";
import { notFound } from "next/navigation";

export default async function BesaidAurochs({ params }: { params: { name: string } }) {
    const { data } = await getPlayers(params.name);

  if (!data)
    return notFound();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="">Technique</TableHead>
        </TableRow>
      </TableHeader>
      {data
        .map((player) => (
          <PlayersTable
            key={player.id}
            name={player.name}
            location={player.location}
            techniques={player.techniques}
          >
            <Image
              src={player.image}
              width={player.image_width}
              height={player.image_height}
              alt={player.name}
              className="flex justify-center items-center m-auto rounded-lg object-scale-down"
            />
          </PlayersTable>
        ))}
    </Table>
  );
}
