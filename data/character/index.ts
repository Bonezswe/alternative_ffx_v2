import { sql } from "@vercel/postgres";

type CharacterDetail = {
    id: string | number;
    role: string;
    name: string;
    description: string;
    image: string;
    image_height: number;
    image_width: number;
    formation: string;
    sphere_grid: string;
    overdrive_title: string;
    overdrive: string;
};

export const getCharacterData = async (name: string) => {
    try {
        const { rows } = await sql`SELECT * FROM character_detail WHERE name == ${name}`;

        return {
            data: rows[0] as CharacterDetail,
        };
    } catch (error) {
        return {
            data: null,
        };
    }
}