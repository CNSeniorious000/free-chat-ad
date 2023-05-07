/** @type {import('./$types').PageLoad} */
export async function load({ setHeaders }) {
    setHeaders({ "Cache-Control": "public,immutable,max-age=220409" });
};