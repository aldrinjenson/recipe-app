import React, { useState } from "react";
import "./Searchbar.styles.css";

const SearchBar = ({ setSearchQuery, placeholder, isFromRecipe }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(value);
  };

  return (
    <div className="search-bar center ">
      <form className="container" onSubmit={handleSubmit} id="search-form">
        <input
          placeholder={placeholder}
          onChange={(e) => {
            if (isFromRecipe) setSearchQuery(e.target.value);
            setValue(e.target.value);
          }}
          type="text"
          id="search-box"
          value={value}
        />
        {!isFromRecipe && (
          <i className="material-icons" id='search-icon' onClick={handleSubmit}>
            search
          </i>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
