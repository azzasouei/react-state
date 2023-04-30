import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const handleApplyFilter = () => {
    handleFilter(titleFilter, ratingFilter);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;

