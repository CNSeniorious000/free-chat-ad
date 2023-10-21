import { getAd } from "./getRandomAd";

export const config = {
    runtime: 'edge'
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const index = cookies.get("index") ?? null;
    const { i, type, href } = getAd(Number(index));
    cookies.set("index", String(i), { maxAge: 60 * 60 * 24 * 300, sameSite: "lax" })
    return { type, href }
};