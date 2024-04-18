// SearchResultsPage.js

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SearchResultPage.css';
const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchTerm = new URLSearchParams(location.search).get('term');
    if (searchTerm) {
      fetchSearchResults(searchTerm);
    }
  }, [location]);

  const fetchSearchResults = async (term) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${term}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setSearchResults([data]);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    }
  };

  return (
    <div className="search-results-page">
      <h1>Search Results</h1>
      <ul>
        {searchResults.map((pokemon) => (
          <li key={pokemon.name}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>{pokemon.name}</span>
            <Link to={`/details/${pokemon.id}`}>
              <button>Show Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsPage;
