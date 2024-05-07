import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EquipmentDetails } from "./EquipmentDetails";
import { Suspense } from "react";

const WIELDERS = [
  "Tidus",
  "Yuna",
  "Auron",
  "Kimahri",
  "Wakka",
  "Lulu",
  "Rikku",
]

export default function Equipment() {
  return (
      <Tabs defaultValue="Tidus" className="text-center">
        <TabsList>
          {WIELDERS.map(wielder => (
            <TabsTrigger value={wielder}>
              {wielder}
            </TabsTrigger>
          ))}
        </TabsList>

        {WIELDERS.map(wielder => (
          <TabsContent value={wielder}>
            <Suspense fallback={<div>Loading...</div>}>
              <EquipmentDetails role={`${wielder} Equipment`} />
            </Suspense>
          </TabsContent>
        ))}
      </Tabs>
  );
}
