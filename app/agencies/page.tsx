import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { getAgencies } from "@/data/agencies";

export default async function AgenciesPage() {
  const { data } = await getAgencies();

  if (!data)
    return notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {data.map((agency) => (
        // Convert to client component or create wrapper to use motion
          // <motion.div
          //   whileHover={{ translateY: -3 }}
          //   whileTap={{ scale: 0.95 }}
          //   key={agency.id}
          // >
            <BasicCardLayout title={agency.name} description={agency.role}>
              <Image
                src={agency.image}
                width={agency.image_width}
                height={agency.image_height}
                alt={agency.name}
                className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-cover"
              />
            </BasicCardLayout>
          // </motion.div>
        ))}
    </div>
  );
}
