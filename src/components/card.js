import React from 'react';

function Card({ pokemon }) {
    return (
        <div className="card">
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
            {/* <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" >
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div> */}
            {/* <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div> */}
        </div>
    );
}

export default Card;