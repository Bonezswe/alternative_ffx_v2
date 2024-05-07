import { sql } from "@vercel/postgres";

interface Race {
    id: string;
    role: string;
    image: string;
    image_height: number;
    image_width: number;
    name: string;
    description: string;
}

export const getRaces = async () => {
    try {
        const { rows } = await sql`SELECT * FROM race`;

        return {
            data: rows as Race[],
        }
    } catch (error) {
        return {
            data: null,
        };
    }
}