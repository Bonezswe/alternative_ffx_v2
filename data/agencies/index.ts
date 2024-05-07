import { sql } from "@vercel/postgres";

interface Agencies {
    id: string;
    role: string;
    image: string;
    image_height: number;
    image_width: number;
    name: string;
}

export const getAgencies = async () => {
    try {
        const result = await sql`SELECT * FROM agencies`;

        const { rows } = result;

        return {
            data: rows as Agencies[],
        }
    } catch(error) {
        console.error(`Get Agencies failed: ${error}`);
        return {
            data: null,
        };
    }
}