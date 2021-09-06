import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../services/fetchPokemon";
import Loader from "../components/loader";
import typeColors from "../services/typeColors";
import { FcLeft } from "react-icons/fc";

function PokemonPage({ match }) {
  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);
  const id = match.params.id;

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const details = await fetchPokemon(url);
    console.log(details);
    setPokemonDetails(details);
    console.log(details);
    setLoading(false);
  };
  useEffect(() => {
    getPokemon(id);
  }, []);
  console.log(pokemonDetails);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="pokemon-page">
          <a href="/" className="back">
            <FcLeft className="fc-icon" />
          </a>
          <div className="p-container">
            <div className="p-img-container">
              <img
                src={
                  pokemonDetails.sprites.other["official-artwork"].front_default
                }
              />
            </div>
            <div className="p-info-container">
              <h1>{pokemonDetails.name}</h1>
              <div className="p-info-list">
                <h5 className="p-info">Weight</h5>
                <p>{pokemonDetails.weight}</p>
              </div>
              <div className="p-info-list">
                <h5 className="p-info">Height</h5>
                <p>{pokemonDetails.height}</p>
              </div>
              <div className="p-info-list">
                <h5 className="p-info">Abilities </h5>
                <p>{pokemonDetails.abilities[0].ability.name}</p>
              </div>
              <div className="p-info-list">
                <h5 className="p-info">Order</h5>
                <p>{pokemonDetails.order}</p>
              </div>
              <div className="p-info-list">
                {pokemonDetails.types.map((type) => {
                  return (
                    <div
                      className="p-info types"
                      style={{ backgroundColor: typeColors[type.type.name] }}
                    >
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p-sprites">
            <h3 className="sprites">sprites</h3>
            <img
              src={pokemonDetails.sprites.back_default}
              alt={pokemonDetails.sprites.back_default}
            />
            <img src={pokemonDetails.sprites.back_female} alt={pokemonDetails.sprites.back_female} />
            <img src={pokemonDetails.sprites.back_shiny} alt={pokemonDetails.sprites.back_shiny} />
            <img
              src={pokemonDetails.sprites.back_shiny_female}
              alt={pokemonDetails.sprites.back_shiny_female}
            />
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.sprites.front_default} />
            <img src={pokemonDetails.sprites.front_female} alt={pokemonDetails.sprites.front_female} />
            <img src={pokemonDetails.sprites.front_shiny} alt={pokemonDetails.sprites.front_shiny} />
            <img
              src={pokemonDetails.sprites.front_shiny_female}
              alt={pokemonDetails.sprites.front_shiny_female}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonPage;
