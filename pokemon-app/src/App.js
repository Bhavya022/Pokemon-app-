// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SearchResultsPage from './components/SearchResultsPage/SearchResultPage';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import Navbar from './components/Navbar/Navbar';
const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/details/:id" element={<PokemonDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
