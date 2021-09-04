import React, { useState, useEffect } from 'react';
import Header from './components/header';
import './sass/main.scss';
import { fetchPokemon } from './services/fetchPokemon';

function App() {
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
      setLoading(false);
        }
        catch (error) {
    console.log(error);
  }
    }
    fetchData();
  }, [])
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
