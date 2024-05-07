import { sql } from "@vercel/postgres";

interface Character {
    id: string;
    role: string;
    image: string;
    image_height: number;
    image_width: number;
    name: string;
    description: string;
    link: string | null;
}

export const getCharactersData = async (role: string) => {
    try {
        const { rows } = await sql`SELECT * FROM character WHERE role == ${role}`;

        return {
            data: rows as Character[],
        }
    } catch (error) {
        console.error(`Get characters failed: ${error}`);
        return {
            data: null,
        };
    }
}