import BasicCardLayout from "@/components/basic-card-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import { getTechnology } from "@/data/technology";
import { notFound } from "next/navigation";

export default async function Technology() {
  const { data } = await getTechnology();

  if (!data)
    return notFound();

  const renderRaceCards = (role: String) => (
    <div className="mx-12">
      {data
        .filter((technology) => technology.role === role)
        .map((tech) => (
          // <motion.div
          //   whileHover={{ translateY: -3 }}
          //   whileTap={{ scale: 0.95 }}
          //   key={tech.id}
          // >
            <BasicCardLayout title={tech.name} description={tech.description}>
              <Image
                src={tech.image}
                width={tech.image_width}
                height={tech.image_height}
                alt={tech.name}
                className="flex justify-center items-center m-auto rounded-lg [500px] w-[500px] object-scale-down"
              />
            </BasicCardLayout>
          // </motion.div>
        ))}
    </div>
  );

  return (

      <Tabs defaultValue="machina" className="text-center">
        <TabsList>
          <TabsTrigger value="machina">Machina</TabsTrigger>
          <TabsTrigger value="movie sphere">Movie Sphere</TabsTrigger>
          <TabsTrigger value="gil">Gil</TabsTrigger>
          <TabsTrigger value="fire arms">Fire Arms</TabsTrigger>
          <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
          <TabsTrigger value="hand held items">Hand Held Items</TabsTrigger>
        </TabsList>
        <TabsContent value="machina">{renderRaceCards("Machina")}</TabsContent>
        <TabsContent value="movie sphere">
          {renderRaceCards("Movie Sphere")}
        </TabsContent>
        <TabsContent value="gil">{renderRaceCards("Gil")}</TabsContent>
        <TabsContent value="fire arms">
          {renderRaceCards("Fire Arms")}
        </TabsContent>
        <TabsContent value="vehicle">{renderRaceCards("Vehicle")}</TabsContent>
        <TabsContent value="hand held items">
          {renderRaceCards("Hand Held Items")}
        </TabsContent>
      </Tabs>

  );
}
