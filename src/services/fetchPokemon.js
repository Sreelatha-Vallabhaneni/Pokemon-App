export async function fetchPokemon( url ) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function loadPokemon (data) {
    try{
      let pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await fetchPokemon(pokemon.url);
        return pokemonRecord;
      }))
      return pokemonData;
    } catch (error) {
      console.log(error);
    }
  }