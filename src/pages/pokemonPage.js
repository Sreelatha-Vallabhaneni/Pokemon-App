import React, { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/fetchPokemon';

function PokemonPage({match}) {
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);
    const id = match.params.id;
    

    const  getPokemon = async(id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const details = await fetchPokemon(url);
        console.log(details)
        setPokemonDetails(details);
        console.log(details)
        setLoading(false);
    }
    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <div>
            {
                loading ? <h1>Loading...</h1> : 
                <div>
                    <img src={pokemonDetails.sprites.other["official-artwork"].front_default} />
                    <h1>{pokemonDetails.name}</h1>
                </div>
            }
        </div>
    )
}

export default PokemonPage;
