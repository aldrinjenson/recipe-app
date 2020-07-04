import React, { useState } from "react";

const SearchBar = ({ setSearchQuery }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setSearchQuery(value);
    setValue("");
  };

  return (
    <div className="container">
      <div className="search-bar">
        <div
          className="input-field"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            placeholder="Enter name of the food you wish to try"
            onChange={(e) => setValue(e.target.value)}
            type="text"
            id="search-box"
            value={value}
          />
          <span className="btn-small" onClick={handleClick}>
            <i className="material-icons">search</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
