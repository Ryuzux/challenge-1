import axios from "axios";

const api_url = "https://pokeapi.co/api/v2/pokemon";

const pokemonApi = {
  getPokemon: async (pageNumber: number = 0, limit: number = 4) => {
    const offset = pageNumber * limit;
    const response = await axios.get(`${api_url}?offset=${offset}&limit=${limit}`);
    return response.data;
  },
};

export default pokemonApi;
