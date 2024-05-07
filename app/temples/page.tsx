import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import Link from "next/link";
import { getTemples } from "@/data/temples";
import { notFound } from "next/navigation";

export default async function Temples() {
  const { data } = await getTemples();

  if (!data)
    return notFound();

  return (

      <div className="grid lg:grid-cols-2 gap-4 mx-12">
        {data.map((temple) => (
              <BasicCardLayout
                title={temple.name}
                description={temple.description}
                link={
                  temple.link && (
                    <Link href={temple.link} className="hover:text-fuchsia-500">
                      Learn More →
                    </Link>
                  )
                }
              >
                <Image
                  src={temple.image}
                  width={temple.image_width}
                  height={temple.image_height}
                  alt={temple.name}
                  className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-cover"
                />
              </BasicCardLayout>
          ))}
      </div>

  );
}
