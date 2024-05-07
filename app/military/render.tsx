"use client";

import BasicCardLayout from "@/components/basic-card-layout"
import Image from "next/image";
import { motion } from "framer-motion";

export const Render = ({ data }: any) => {
    return (
        <div className="mx-12">
            {data
                .map((militia: any) => (
                    <motion.div
                        whileHover={{ translateY: -3 }}
                        whileTap={{ scale: 0.95 }}
                        key={militia.id}
                    >
                        <BasicCardLayout
                        title={militia.name}
                        description={militia.description}
                        >
                            <Image
                                src={militia.image}
                                width={militia.image_width}
                                height={militia.image_height}
                                alt={militia.name}
                                className="flex justify-center items-center m-auto rounded-lg [500px] w-[500px] object-scale-down"
                            />
                        </BasicCardLayout>
                    </motion.div>
                ))}
        </div>
    )
}