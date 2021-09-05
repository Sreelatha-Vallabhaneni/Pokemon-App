import React from 'react';
import { Link } from "react-router-dom";

function Card({ pokemon }) {
    return (
        
        <div className="card"  >
            <div className="card__img">
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt="Pokemon image"  width="180"/>
            </div>
            <div className="card__info">
                <h3 className="name">{pokemon.name}</h3>
                <div className="card__weight">
                    <h6>Weight</h6>
                    <p className="list-info">{pokemon.weight}</p>
                </div>
                <div className="card__height">
                    <h6>Height</h6>
                    <p className="list-info">{pokemon.height}</p>
                </div>
                <div className="card__ability">
                    <h6>Ability</h6>
                    <p className="list-info">{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Card;