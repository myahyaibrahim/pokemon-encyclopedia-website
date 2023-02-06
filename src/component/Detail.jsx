import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/Detail.css";

function Detail() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState({
    type: [],
    weight: null,
    height: null,
    abilities: [],
    moves: [],
    stats: [],
    image: null,
  });

  useEffect(() => {
    // Get pokemon's data
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then((pokemonResponse) => {
        setPokemon({
          ...pokemon,
          type: pokemonResponse.data.types,
          weight: pokemonResponse.data.weight,
          height: pokemonResponse.data.height,
          abilities: pokemonResponse.data.abilities,
          moves: pokemonResponse.data.moves,
          stats: pokemonResponse.data.stats,
          image: pokemonResponse.data.sprites.other.dream_world.front_default,
        });
      });
  }, []);

  return (
    <div>
      <section>
        <div className="container">
          <h1>{pokemonName}</h1>
          <div className="detail-box">
            <div className="image-box box">
              <img
                src={pokemon.image}
                alt="pokemon-img"
                className="image-detail"
              />
            </div>

            <div className="basic-description-box box">
              <table className="basic-desc-table">
                <tr>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Abililties</th>
                </tr>
                <tr>
                  <td>{pokemon.weight} hg</td>
                  <td>{pokemon.height} dm</td>
                  <td>
                    {pokemon.abilities.map((currentAbility) => (
                      <p>{currentAbility.ability.name}</p>
                    ))}
                  </td>
                </tr>
              </table>

              <h3>Pokemon Type</h3>
              <div className="type-badges">
                {pokemon.type &&
                  pokemon.type.map((currentType) => (
                    <div className="type-badge">
                      <p>{currentType.type.name}</p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="stat-box box">
              <h3>Pokemon Stats</h3>
              <div className="stat-table-container">
                <table className="stat-table">
                  <tr>
                    <th className="stat-table-category">Name</th>
                    <th className="stat-table-category">Base Value</th>
                    <th className="stat-table-category">Effort Point (EV)</th>
                  </tr>
                  {pokemon.stats.map((currentStat) => (
                    <tr>
                      <td className="stat-table-category">
                        {currentStat.stat.name}
                      </td>
                      <td className="stat-table-value">
                        {currentStat.base_stat}
                      </td>
                      <td className="stat-table-value">{currentStat.effort}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>

            <div className="moves-box box">
              <h3>Moves</h3>
              <div className="moves">
                {pokemon.moves.map((currentMove) => (
                  <div className="move">
                    <p>{currentMove.move.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
