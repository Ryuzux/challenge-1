/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "../styles/App.css";
import pokemonApi from "../api/pokemon-api.ts";
import { Pokemon } from "../types/pokemon.ts";
import PokemonCard from "../components/PokemonCard.tsx";
import { useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const limit = 6;
  const navigate = useNavigate();

  const fetchPoke = async (pageNumber: number) => {
    setIsLoading(true);
    try {
      const response = await pokemonApi.getPokemon(pageNumber, limit);
      setData(response);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPoke(page);
  }, [page]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <>
      <button onClick={handleLogout} style={{ position: "absolute", top: "10px", right: "10px", margin: "20px" }}>
        Logout
      </button>
      <div className="pokemon-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.results.map((pokemon, index) => (
            <PokemonCard
              key={pokemon.url}
              name={pokemon.name}
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1 + page * limit}.png`}
            />
          ))
        )}
      </div>
      {isLoading ? (
        null
      ) : (
        <div className="controls">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0 || isLoading}
          >
            Previous
          </button>

          <button
            onClick={() => setPage(page + 1)}
            disabled={isLoading}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default App;
