import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import SearchBar from '../SearchBar/SearchBar';
import RandomPokemonCard from '../RandomPokemonCard/RandomPokemonCard';
import './HomePage.css';

const HomePage = ({ onSearch }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (term) => {
    if (term.trim() !== '') {
      try {
        const response = await onSearch(term);
        console.log(response);
        // Redirect to the search results page with the search term as a query parameter
        navigate(`/search?term=${term}`);
      } catch (error) {
        console.error('Error searching:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  return (
    <div className="home-page-container">
      <h1>Welcome to the Pokemon App!</h1>
      <SearchBar value={searchTerm} onChange={handleInputChange} onSearch={handleSearch} onKeyPress={handleKeyPress} />
      <RandomPokemonCard />
    </div>
  );
};

export default HomePage;
