import { sql } from "@vercel/postgres";

interface Temple {
    id: string;
    role: string;
    image: string;
    image_height: number;
    image_width: number;
    name: string;
    description: string;
    link: string;
    location: string;
}

export const getTemples = async () => {
    try {
        const { rows } = await sql`SELECT * FROM temples`;

        return {
            data: rows as Temple[],
        }
    } catch (error) {
        return {
            data: null,
        };
    }
}