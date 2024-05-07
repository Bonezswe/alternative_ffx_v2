"use client";

import Image from "next/image";
import BasicCardLayout from "@/components/basic-card-layout";
import { motion } from "framer-motion";

export const Renderer = ({ data }: any) => (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {data
        .map((race: any) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={race.id}
          >
            <BasicCardLayout title={race.name} description={race.description}>
              <Image
                src={race.image}
                width={race.image_width}
                height={race.image_height}
                alt={race.name}
                className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
              />
            </BasicCardLayout>
          </motion.div>
        ))}
    </div>
);