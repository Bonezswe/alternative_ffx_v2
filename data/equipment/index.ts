import { sql } from "@vercel/postgres";

interface Equipment {
    id: string;
    role: string;
    name: string;
    weapon_image: string;
    weapon_image_height: number;
    weapon_image_width: number;
    weapon_name: string;
    armor_image: string;
    armor_image_height: number;
    armor_image_width: number;
    armor_name: string;
    description: string;
}

export const getEquipment = async (role: string) => {
    try {
        const { rows } = await sql`SELECT * FROM equipment WHERE role == ${role} LIMIT 1`;

        return {
            data: rows[0] as Equipment
        };
    } catch (error) {
        return {
            data: null,
        };
    }
}