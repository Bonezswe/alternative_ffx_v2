import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import { getMaesters } from "@/data/maesters";
import { notFound } from "next/navigation";

export default async function Maesters() {
  const { data } = await getMaesters();

  if (!data)
    return notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {data.map((maester) => (
          // <motion.div
          //   whileHover={{ translateY: -3 }}
          //   whileTap={{ scale: 0.95 }}
          //   key={maester.id}
          // >
            <BasicCardLayout title={maester.name} description={maester.role}>
              <Image
                src={maester.image}
                width={maester.image_width}
                height={maester.image_height}
                alt={maester.name}
                className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
              />
            </BasicCardLayout>
          // </motion.div>
        ))}
    </div>
  );
}
