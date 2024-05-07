import { sql } from "@vercel/postgres";

interface Players {
    id: string;
    team_name: string;
    name: string;
    location: string;
    techniques: string;
    image: string;
    image_height: number;
    image_width: number;
}

export const getPlayers = async (teamName: string) => {
    try {
        const { rows } = await sql`SELECT * FROM players WHERE team_name == ${teamName}`;
    
        return {
            data: rows as Players[],
        };
    } catch (error) {
        return {
            data: null,
        };
    }
}