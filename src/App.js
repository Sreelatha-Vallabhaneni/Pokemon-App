import React, { useState, useEffect } from 'react';
import Header from './components/header';
import { fetchPokemon } from './services/fetchPokemon';
import Pagination from './components/pagination';
import Card from './components/card';
import './sass/main.scss';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
        try{
          let response = await fetchPokemon(initialURL);
          console.log(response);
          setNext(response.next);
          setPrevious(response.previous);
          await loadPokemon(response.results);
          setLoading(false);
        }
        catch (error) {
          console.log(error);
        }
      } fetchData();
    }, [])

    const nextPage = async () => {
      setLoading(true);
      let data = await fetchPokemon(next);
      await loadPokemon(data.results);
      setNext(data.next);
      setPrevious(data.previous);
      setLoading(false);
    }
  
    const prevPage = async () => {
      setLoading(true);
      let data = await fetchPokemon(previous);
      await loadPokemon(data.results);
      setNext(data.next);
      setPrevious(data.previous);
      setLoading(false);
    }

  const loadPokemon = async (data) => {
    try{
      let pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await fetchPokemon(pokemon.url);
        return pokemonRecord;
      }))
      setPokemonData(pokemonData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      {
        loading
        ?
        <h1>Loading...</h1>
        :
        <React.Fragment>
          <div className="page-btn">
            <Pagination gotoPrevPage={ previous ? prevPage : null}/>
            <Pagination gotoNextPage={next ? nextPage : null} />
          </div>
          <div className="card-wrapper flex">
            {pokemonData.map((pokemon, index) => {
              return <Card className="single-card" key={index} pokemon={pokemon} />
              })}
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export default App;
