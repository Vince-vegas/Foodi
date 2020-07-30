import React from 'react';

const Search = ({ onSubmit, handleChange, handleValue }) => {
  return (
    <div className="search-box">
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search for Recipes"
          onChange={handleChange}
          value={handleValue}
          className="search-input"
        />

        <input className="search-btn" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
