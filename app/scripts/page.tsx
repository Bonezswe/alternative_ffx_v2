import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getScripts } from "@/data/scripts";
import { notFound } from "next/navigation";



export default async function Scripts() {
  const { data } = await getScripts();

  if (!data)
    return notFound();

  const renderScriptCards = (role: String) => (
    <div className="mx-12">
      {data
        .filter((script) => script.role === role)
        .map((script) => (
          <Card
            key={script.id}
            className="text-center grid grid-cols-2 items-center p-4"
          >
            <CardHeader className="space-y-4">
              <CardTitle>{script.name}</CardTitle>
              <CardDescription>{script.description}</CardDescription>
              <Image
                src={script.image}
                width={script.image_width}
                height={script.image_height}
                alt={script.image_name}
                className="rounded-lg mx-auto"
              />
            </CardHeader>
            <CardContent>
              <Image
                src={script.script_image}
                width={script.script_image_width}
                height={script.script_image_height}
                alt={script.script_image_name}
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        ))}
    </div>
  );

  return (
    <Tabs defaultValue="spiran" className="text-center">
      <TabsList>
        <TabsTrigger value="spiran">Spiran Script</TabsTrigger>
        <TabsTrigger value="alBhed">Al Bhed Script</TabsTrigger>
        <TabsTrigger value="yevon">Yevon Script</TabsTrigger>
      </TabsList>
      <TabsContent value="spiran">
        {renderScriptCards("Spiran Scripts")}
      </TabsContent>
      <TabsContent value="alBhed">
        {renderScriptCards("Al Bhed Scripts")}
      </TabsContent>
      <TabsContent value="yevon">
        {renderScriptCards("Yevon Scripts")}
      </TabsContent>
    </Tabs>
  );
}
