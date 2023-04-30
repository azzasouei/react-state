import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-poster" />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-description">{description}</p>
      <span className="movie-rating">Rating: {rating}</span>
    </div>
  );
};

export default MovieCard;
