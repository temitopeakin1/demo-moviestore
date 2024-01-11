import React from "react";
import "./search.styles.css";
import { useState } from "react";

const SearchField = ({ updateResults }) => {
  const [value, updateValue] = useState("");

  const handleSearch = (e) => {
    // const answer = e.target.value;

    updateValue(e.target.value);

    // const apiKey = "1813ba2c";

    // const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${answer}`;
    // console.log(url);

    // // console.log(e.target.value);
    // // updateSearch(e.target.value);

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data.Search);
    //     updateResults(data.Search);
    //   });
  };

  const handleClick = () => {
    const apiKey = "1813ba2c";

    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${value}`;
    console.log(url);

    // console.log(e.target.value);
    // updateSearch(e.target.value);

    if (value.length) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          updateResults(data.Search);
        });
    }
  };

  return (
    <div className="search-field">
      <div className="input-field">
        <input
          type="text"
          name="search"
          value={value}
          placeholder="Search movies..."
          onChange={handleSearch}
        />
        <i className="fas fa-search"></i>
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchField;
