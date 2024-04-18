import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const pokeapi = {
  getPokemonByName: async (name) => {
    const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
    return response.data;
  },
  getPokemonDetails: async (id) => {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
  },
  searchPokemon: async (term) => { // Define the searchPokemon function
    const response = await axios.get(`${BASE_URL}/pokemon?limit=10&search=${term}`);
    return response.data.results;
  },
};

export default pokeapi;
