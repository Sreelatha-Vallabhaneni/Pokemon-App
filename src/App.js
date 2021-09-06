import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/header';
import { fetchPokemon } from './services/fetchPokemon';
import Pagination from './components/pagination';
import Card from './components/card';
import Loader from './components/loader';
import PokemonPage from './pages/pokemonPage';
import CardsPerPage from './components/cardsPerPage';
import './sass/main.scss';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState();
  const [offset, setOffset] =useState();
  
  useEffect(() => {
    async function fetchData() {
      const initialURL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
        try{
          let response = await fetchPokemon(initialURL);
          setNext(response.next);
          setPrevious(response.previous);
          await loadPokemon(response.results);
          setLoading(false);
        }
        catch (error) {
          console.log(error);
        }
      } fetchData();
    }, [limit, offset])

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
      {
        loading
        ?
        <Loader />
        :
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/">
                <div className="header-wrapper flex">
                  <Header />
                  <CardsPerPage change={(e) => {setLimit(e.target.value)}} />
                </div>
                <div className="page-btn">
                  <Pagination gotoPrevPage={ previous ? prevPage : null}/>
                  <Pagination gotoNextPage={next ? nextPage : null} />
                </div>
                <div className="card-wrapper flex">
                  {pokemonData.map((pokemon, index) => {
                    return <Link to={`/pokemon/${pokemon.id}`} key={pokemon.name}>
                      <Card className="single-card" key={index} pokemon={pokemon} />
                    </Link>
                    })}
                </div>
                </Route>
                <Route path='/pokemon/:id' component={PokemonPage}/>
              </Switch>
            </Router>
            <div className="footer flex">
              <h6>Developed by a passionate developer (SREELATHA VALLABHANENI)</h6>
            </div>
        </React.Fragment>
      }
    </div>
  );
}

export default App;
