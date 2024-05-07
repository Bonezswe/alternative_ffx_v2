"use client";
import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCharactersData } from "@/data/characters";
import { notFound } from "next/navigation";

export default async function SupportingCharacters() {
    const { data } = await getCharactersData("Supporting Characters");

    // ALTERNATIVELY (AS this is client component)

    // const [characters, setCharacters] = useState<Character[]>([]);

    // useEffect(() => {
    //     const getCharacterData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:3000/api/get-characters");
    //             const { characters } = await response.json();
        
    //             setCharacters(characters);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }

    //     getCharacterData();
    // }, []);
  if (!data)
    return notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {data
        .map((character) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={character.id}
          >
            <BasicCardLayout
              title={character.name}
              description={character.description}
              link={
                character.link && (
                  <Link
                    href={character.link}
                    className="hover:text-fuchsia-500"
                  >
                    Learn More →
                  </Link>
                )
              }
            >
              <Image
                src={character.image}
                width={character.image_width}
                height={character.image_height}
                alt={character.name}
                className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
              />
            </BasicCardLayout>
          </motion.div>
        ))}
    </div>
  );
}
