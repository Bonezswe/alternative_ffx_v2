import { sql } from "@vercel/postgres";

interface Aeon {
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

interface AeonDetails {
    id: string;
    role: string;
    name: string;
    description_1: string;
    description_2: string;
    description_3: string;
    location: string;
    image_profile: string;
    image_profile_height: number;
    image_profile_width: number;
    image_body: string;
    image_body_height: number;
    image_body_width: number;
    image_fayth: string;
    image_fayth_height: number;
    image_fayth_width: number;
}

export const getAeons = async () => {
    try {
        const { rows } = await sql`SELECT * FROM aeons`;

        return {
            data: rows as Aeon[]
        }
    } catch (error) {
        console.error(`Get Aeons Failed: ${error}`);
        return {
            data: null,
        }
    }
}

export const getAeonByName = async (name: string) => {
    try {
        const result = await sql`SELECT * FROM aeon_detail WHERE name ${name}`;
    
        const { rows } = result;
    
        return {
            data: rows[0] as AeonDetails,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };
    }
}