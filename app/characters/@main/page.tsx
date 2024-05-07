import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCharactersData } from "@/data/characters";
import { notFound } from "next/navigation";

export default async function MainCharacters() {
  const { data } = await getCharactersData("Main Characters");

  if (!data)
    return notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {data
        .map(({
          name,
          description,
          link,
          image,
          image_height,
          image_width
        }) => (
        //   <motion.div
        //     whileHover={{ translateY: -3 }}
        //     whileTap={{ scale: 0.95 }}
        //     key={character.id}
        //   >
            <BasicCardLayout
              title={name}
              description={description}
              link={
                link && (
                  <Link
                    href={link}
                    className="hover:text-fuchsia-500"
                  >
                    Learn More →
                  </Link>
                )
              }
            >
              <Image
                src={image}
                width={image_width}
                height={image_height}
                alt={name}
                className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
              />
            </BasicCardLayout>
        //   </motion.div>
        ))}
    </div>
  );
}
