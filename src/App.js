import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleFilter = (titleFilter, ratingFilter) => {
    
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter
      );
    });

    // Update the movie list with the filtered results
    setMovies(filteredMovies);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter handleFilter={handleFilter} />
      <MovieList movies={movies} />
      {/* Render other components or features */}
    </div>
  );
};

export default App;



