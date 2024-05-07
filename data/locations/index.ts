import { sql } from "@vercel/postgres";

interface Location {
    id: string;
    role: string;
    image: string;
    image_height: number;
    image_width: number;
    name: string;
    description: string;
    link: string | null;
}

export const getLocations = async () => {
    try {
        const { rows } = await sql`SELECT * FROM locations`;
    
        return {
            data: rows as Location[],
        };
    } catch (error) {
        return {
            data: null,
        };
    }
}