import { sql } from "@vercel/postgres";

interface Technology {
    id: string;
    role: string;
    name: string;
    description: string;
    image: string;
    image_height: number;
    image_width: number;
}

export const getTechnology = async () => {
    try {
        const { rows } = await sql`SELECT * FROM technology`;

        return {
            data: rows as Technology[],
        }
    } catch (error) {
        return {
            data: null,
        };
    }
}