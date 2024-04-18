// RandomPokemonCard.js

import React, { useState, useEffect } from 'react';
import './RandomPokemonCard.css';
import pokeapi from '../services/pokeapi';

const RandomPokemonCard = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      const today = new Date().toLocaleDateString();
      let storedPokemon = localStorage.getItem('randomPokemon');
      if (storedPokemon) {
        storedPokemon = JSON.parse(storedPokemon);
        if (storedPokemon.date === today) {
          setRandomPokemon(storedPokemon.pokemon);
          return;
        }
      }

      try {
        const randomId = Math.floor(Math.random() * 898) + 1; // Assuming there are 898 Pokemon
        const pokemon = await pokeapi.getPokemonDetails(randomId);
        setRandomPokemon(pokemon);
        localStorage.setItem('randomPokemon', JSON.stringify({ date: today, pokemon }));
      } catch (error) {
        console.error('Error fetching random Pokemon:', error);
      }
    };

    fetchRandomPokemon();
  }, []);

  if (!randomPokemon) {
    return <p>Loading random Pokemon...</p>;
  }

  return (
    <div className="random-pokemon-card">
      <h2>Random Pokemon of the Day</h2>
      <img src={randomPokemon.sprites.front_default} alt={randomPokemon.name} />
      <p><b>Name:</b>{randomPokemon.name}</p>
          <p><b>Height:</b> {randomPokemon.height}</p>
          <p><b>Weight:</b> {randomPokemon.weight}</p>
    </div>
  );
};

export default RandomPokemonCard;
