import { sql } from "@vercel/postgres";

interface Maesters {
    id: string;
    role: string;
    image: string;
    image_height: number;
    image_width: number;
    name: string;
}

export const getMaesters = async () => {
    try {
        const { rows } = await sql`SELECT * FROM maesters`;

        return {
            data: rows as Maesters[],
        };
    } catch (error) {
        return {
            data: null,
        };
    }
}