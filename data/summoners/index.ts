import { sql } from "@vercel/postgres";

interface Summoner {
    id: string;
    role: string;
    image: string | null;
    image_height: number | null;
    image_width: number | null;
    name: string;
    description: string;
}

export const getSummoners = async () => {
    try {
        const { rows } = await sql`SELECT * FROM summoners`;
        
        return {
            data: rows as Summoner[],
        }
    } catch (error) {
        return {
            data: null,
        };
    }
}