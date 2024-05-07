import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getTeams } from "@/data/teams";
import { notFound } from "next/navigation";

export default async function BlitzballTeams() {
  const { data } = await getTeams();

  if (!data)
    return notFound();

  return (
      <div className="grid lg:grid-cols-2 gap-4 mx-12">
        {data.map((team) => (
            // <motion.div
            //   whileHover={{ translateY: -3 }}
            //   whileTap={{ scale: 0.95 }}
            //   key={team.id}
            // >
              <BasicCardLayout
                title={team.name}
                description={team.description}
                link={
                  team.link && (
                    <Link href={team.link} className="hover:text-fuchsia-500">
                      Learn More →
                    </Link>
                  )
                }
              >
                <Image
                  src={team.image}
                  width={team.image_width}
                  height={team.image_height}
                  alt={team.name}
                  className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
                />
              </BasicCardLayout>
            // </motion.div>
          ))}
      </div>

  );
}
