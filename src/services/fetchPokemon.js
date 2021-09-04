export async function fetchPokemon( url ) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}