"use client";

import Image from "next/image";
import BasicCardLayout from "@/components/basic-card-layout";
import { getEquipment } from "@/data/equipment";
import { motion } from "framer-motion";

export const EquipmentDetails = async ({ role }: { role: string }) => {
    const { data } = await getEquipment(role);

    if (!data)
        return (
            <div>
                <h1>Not Found</h1>
            </div>
        );

    return (
        <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={data.id}
          >
                <BasicCardLayout title={data.name} description={data.description}>
                    <div className='flex xl:flex-row flex-col'>
              <Image
                src={data.weapon_image}
                width={data.weapon_image_width}
                height={data.weapon_image_height}
                alt={data.weapon_name}
                className="flex justify-center items-center m-auto rounded-lg [500px] w-[500px] object-scale-down"
              />
              <Image
                src={data.armor_image}
                width={data.armor_image_width}
                height={data.armor_image_height}
                alt={data.armor_name}
                className="flex justify-center items-center m-auto rounded-lg [500px] w-[500px] object-scale-down"
              /></div>
            </BasicCardLayout>
          </motion.div>
    );
}