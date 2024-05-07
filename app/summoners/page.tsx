import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { getSummoners } from "@/data/summoners";
import { notFound } from "next/navigation";

export default async function Summoners() {
  const { data } = await getSummoners();

  if (!data)
    return notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {data.map((summoner) => (
          // <motion.div
          //   whileHover={{ translateY: -3 }}
          //   whileTap={{ scale: 0.95 }}
          //   key={summoner.id}
          // >
            <BasicCardLayout
              title={summoner.name}
              description={summoner.description}
            >
              {summoner?.image &&
                summoner?.image_width &&
                summoner?.image_height && (
                  <Image
                    src={summoner.image}
                    width={summoner.image_width}
                    height={summoner.image_height}
                    alt={summoner.name}
                    className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
                  />
                )}
            </BasicCardLayout>
          // </motion.div>
        ))}
    </div>
  );
}
