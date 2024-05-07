import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAeons } from "@/data/aeons";

export default async function AeonsPage() {
  const { data } = await getAeons();

  if (!data || data.length === 0)
    return notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {data.map((aeon) => (
        // Need to convert back to client component or make wrapper to use motion
          // <motion.div
          //   whileHover={{ translateY: -3 }}
          //   whileTap={{ scale: 0.95 }}
          //   key={aeon.id}
          // >
            <BasicCardLayout
              title={aeon.name}
              description={aeon.description}
              link={
                aeon.link && (
                  <Link href={aeon.link} className="hover:text-fuchsia-500">
                    Learn More →
                  </Link>
                )
              }
            >
              <Image
                src={aeon.image}
                width={aeon.image_width}
                height={aeon.image_height}
                alt={aeon.name}
                className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
              />
            </BasicCardLayout>
          // </motion.div>
        ))}
    </div>
  );
}
