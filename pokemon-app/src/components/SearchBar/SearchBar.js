import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      try {
        const response = await onSearch(searchTerm.trim());
        console.log(response);
        // Redirect to the search results page with the search term as a query parameter
        navigate(`/search?term=${encodeURIComponent(searchTerm.trim())}`);
      } catch (error) {
        console.error('Error searching:', error);
      }
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
