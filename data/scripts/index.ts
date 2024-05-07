import { sql } from "@vercel/postgres";

interface Script {
    id: string;
    role: string;
    name: string;
    description: string;
    image: string;
    image_name: string;
    image_height: number;
    image_width: number;
    script_image: string;
    script_image_name: string;
    script_image_height: number;
    script_image_width: number;
}

export const getScripts = async () => {
    try {
        const { rows } = await sql`SELECT * FROM scripts`;
        
        return {
            data: rows as Script[],
        }
    } catch (error) {
        return {
            data: null,
        };
    }
}