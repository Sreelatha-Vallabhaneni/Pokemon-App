import React, { useState, useEffect } from "react";
import { fetchPokemon, loadPokemon } from "../services/fetchPokemon";

function SearchBox() {
  const [mainData, setMaindata] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function allData() {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`;
      try {
        const res = await fetchPokemon(url);
        const searchPkData = await loadPokemon(res.results);
        setMaindata(searchPkData);
      } catch (error) {
        console.log(error);
      }
    }
    allData();
  }, []);

  function handleFilter(e) {
    const searchWord = e.target.value;
    setSearch(searchWord);
    const byName = mainData.filter((item) => {
      return item.name.toLowerCase().startsWith(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(byName);
    }
  }
  return (
    <div className="search-container">
      <input
        className="search"
        type="search"
        value={search}
        onChange={handleFilter}
        placeholder="Search Pokemon by name"
      />
      {filteredData.length != 0 && (
        <div className="search__result">
          {filteredData.map((value) => {
            return (
              <a
                className="search__link"
                href={`/pokemon/${value.id}`}
                key={value.id}
              >
                <div className="search__list">
                  <p key={value.id}>{value.name} </p>
                  <img
                    src={value.sprites.other["official-artwork"].front_default}
                    alt="Pokemon image"
                    width="40"
                  />
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
