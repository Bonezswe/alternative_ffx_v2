import { sql } from "@vercel/postgres";

interface Military {
    id: string;
    role: string;
    name: string;
    description: string;
    image: string;
    image_height: number;
    image_width: number;
}

export const getMilitary = async () => {
    try {
        const { rows } = await sql`SELECT * FROM military`;
        
        return {
            data: rows as Military[],
        }
    } catch (error) {
        return {
            data: null,
        };
    }
}