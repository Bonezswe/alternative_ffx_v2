import Image from "next/image";
import { Card, CardDescription } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { getAeonByName } from "@/data/aeons";

export default async function AeonPage({ params }: { params: { name: string } }) {
    const { data } = await getAeonByName(params.name);

    if (!data)
        return notFound();

  return (
    <div>
        <div key={data.name} className="space-y-4">
            <div className="flex flex-row gap-4">
                <Card className="m-auto p-4">
                    <CardDescription>{data.description_1}</CardDescription>
                </Card>

                <Image
                src={data.image_profile}
                width={data.image_profile_width}
                height={data.image_profile_height}
                alt={data.name}
                className="flex justify-center items-center m-auto rounded-lg object-scale-down"
                />
            </div>

            <div className="flex flex-row gap-4">
                <Image
                src={data.image_body}
                width={data.image_body_width}
                height={data.image_body_height}
                alt={data.name}
                className="flex justify-center items-center m-auto rounded-lg  object-scale-down"
                />

                <Card className="m-auto p-4">
                    <CardDescription>{data.description_2}</CardDescription>
                </Card>
            </div>

            <div className="flex flex-row gap-4">
                <Card className="m-auto p-4">
                    <CardDescription>{data.description_3}</CardDescription>
                </Card>

                <Image
                src={data.image_fayth}
                width={data.image_fayth_width}
                height={data.image_fayth_height}
                alt={data.name}
                className="flex justify-center items-center m-auto rounded-lg object-scale-down"
                />
            </div>
        </div>
    </div>
  );
}
