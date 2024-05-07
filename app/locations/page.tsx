import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { getLocations } from "@/data/locations";
import { notFound } from "next/navigation";

export default async function Locations() {
  const { data } = await getLocations();

  if (!data)
    return notFound();

  const renderLocationCards = (role: String) => (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {data
        .map((location) => (
          // <motion.div
          //   whileHover={{ translateY: -3 }}
          //   whileTap={{ scale: 0.95 }}
          //   key={location.id}
          // >
            <BasicCardLayout
              title={location.name}
              description={location.description}
            >
              <Image
                src={location.image}
                width={location.image_width}
                height={location.image_height}
                alt={location.name}
                className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-cover"
              />
            </BasicCardLayout>
          // </motion.div>
        ))}
    </div>
  );

  return (
    <>
    {/* Not sure if this is needed? */}
      {/* <Tabs className="text-center">
        <TabsList>
          <TabsTrigger value="temples">Temples</TabsTrigger>
          <TabsTrigger value="agencies">Agencies</TabsTrigger>
        </TabsList>
        <TabsContent value="temples">
          {renderCharacterCards("Temples")}
        </TabsContent>
        <TabsContent value="agencies">
          {renderCharacterCards("Agencies")}
        </TabsContent>
      </Tabs> */}
      {renderLocationCards("Location")}
    </>
  );
}
