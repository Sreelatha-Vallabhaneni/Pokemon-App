import React, { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/fetchPokemon';
import Card from '../components/card';
import typeColors from '../services/typeColors';
import { FcLeft } from "react-icons/fc";


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
                <React.Fragment>
                    <a href="/"><FcLeft className="fc-icon"/></a>
                    <div className="p-container">
                    {/* <Card pokemon={pokemonDetails} /> */}
                    <div className="p-img-container">
                        <img src={pokemonDetails.sprites.other["official-artwork"].front_default} />
                    </div>
                    <div className="p-info-container">
                        <h1>{pokemonDetails.name}</h1>
                        <div className="p-info-list">
                            <h5 className="p-info">Weight</h5>
                            <p>{pokemonDetails.weight}</p>
                        </div>
                        <div className="p-info-list">
                            <h5 className="p-info">Height</h5>
                            <p>{pokemonDetails.weight}</p>
                        </div>
                        <div className="p-info-list">
                            <h5 className="p-info">Abilities </h5>
                            <p>{pokemonDetails.abilities[0].ability.name}</p>
                        </div>
                        <div className="p-info-list">
                            { pokemonDetails.types.map(type => {
                                return (
                                    <div className="p-info types" style={{ backgroundColor: typeColors[type.type.name] }}>
                                        {type.type.name}
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                </div>
                </React.Fragment>
                
            }
        </div>
    )
}

export default PokemonPage;
