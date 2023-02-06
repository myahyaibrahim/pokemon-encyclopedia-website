import { useEffect, useState } from "react";
import "./css/PokemonEncyclopedia.css";
import axios from "axios";
import { Link } from "react-router-dom";

function PokemonEncyclopedia() {
  const [pokemonCount, setPokemonCount] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    // Check if current state is rendering first page
    if (isFirstPage) {
      fetchPokemonFirstTime();
    }
  }, [isFirstPage]);

  const fetchPokemonFirstTime = async () => {
    let temporaryListPokemon = [];
    let currentPokemondata = [];

    // Get list of pokemon names
    await axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setPokemonCount(response.data.count);
      setNext(response.data.next);
      setPrevious(response.data.previous);
      temporaryListPokemon = response.data.results;
    });

    // Get each pokemon character's data
    temporaryListPokemon.map(async (currPokemon, index) => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + currPokemon.name)
        .then((pokemonResponse) => {
          currentPokemondata.push({
            name: currPokemon.name,
            url: currPokemon.url,
            id: pokemonResponse.data.id,
            image: pokemonResponse.data.sprites.other.dream_world.front_default,
          });
        });

      // If all pokemons' data fetched, update new state
      if (index === temporaryListPokemon.length - 1) {
        setLoading(false);
        setIsFirstPage(false);
        setPokemonData(currentPokemondata);
        // setTimeout(() => {
        //   setPokemonData(currentPokemondata);
        // }, 250);
      }
    });
  };

  const nextPage = async () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Fetch pokomen data
    let temporaryListPokemon = [];
    let currentPokemondata = [];
    setLoading(true);

    // Get list of pokemon names
    await axios.get(next).then((response) => {
      setPokemonCount(response.data.count);
      setNext(response.data.next);
      setPrevious(response.data.previous);
      temporaryListPokemon = response.data.results;
    });

    // Get each pokemon character's data
    temporaryListPokemon.map(async (currPokemon, index) => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + currPokemon.name)
        .then((pokemonResponse) => {
          currentPokemondata.push({
            name: currPokemon.name,
            url: currPokemon.url,
            id: pokemonResponse.data.id,
            image: pokemonResponse.data.sprites.other.dream_world.front_default,
          });
        });

      // If all pokemons' data fetched, update new state
      if (index === temporaryListPokemon.length - 1) {
        setLoading(false);
        setPokemonData(currentPokemondata);
        // setTimeout(() => {
        //   setPokemonData(currentPokemondata);
        // }, 250);
      }
    });
  };

  const previousPage = async () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Fetch pokomen data
    let temporaryListPokemon = [];
    let currentPokemondata = [];
    setLoading(true);

    // Get list of pokemon names
    await axios.get(previous).then((response) => {
      setPokemonCount(response.data.count);
      setNext(response.data.next);
      setPrevious(response.data.previous);
      temporaryListPokemon = response.data.results;
    });

    // Get each pokemon character's data
    temporaryListPokemon.map(async (currPokemon, index) => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + currPokemon.name)
        .then((pokemonResponse) => {
          currentPokemondata.push({
            name: currPokemon.name,
            url: currPokemon.url,
            id: pokemonResponse.data.id,
            image: pokemonResponse.data.sprites.other.dream_world.front_default,
          });
        });

      // If all pokemons' data fetched, update new state
      if (index === temporaryListPokemon.length - 1) {
        setLoading(false);
        setPokemonData(currentPokemondata);
        // setTimeout(() => {
        //   setPokemonData(currentPokemondata);
        // }, 250);
      }
    });
  };

  // Check if still fetching data (still loading)
  if (isLoading) {
    return (
      <div>
        <section>
          <div className="container">
            <h1>Loading, please wait...</h1>
          </div>
        </section>
      </div>
    );
  } else {
    // All data has been fetched successfully
    return (
      <div>
        <section>
          <div className="container">
            <h1>Pokemon Encyclopedia</h1>
            <div className="cards">
              {pokemonData.map((pokemon, index) => (
                <div key={index} className="card">
                  <div className="imageContainer">
                    <img
                      src={pokemon.image}
                      alt="product-img"
                      className="productImage"
                    />
                  </div>
                  <h3 className="product-title">{pokemon.name}</h3>
                  <Link className="btn-link" to={`/detail/${pokemon.name}`}>
                    <button
                      className="btn"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      See Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="buttons">
              <button
                className="btn"
                onClick={previousPage}
                disabled={previous === null ? true : false}
              >
                Previous
              </button>
              <button
                className="btn"
                onClick={nextPage}
                disabled={next === null ? true : false}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PokemonEncyclopedia;
