import { sql } from "@vercel/postgres";

interface BlitzballTeams {
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

export const getTeams = async () => {
    try {
        const { rows } = await sql`SELECT * FROM teams`;
    
        return {
            data: rows as BlitzballTeams[],
        }
    } catch (error) {
        return {
            data: null,
        };
    }
}