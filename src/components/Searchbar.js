import React, { useState } from "react";

const SearchBar = ({ setSearchQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(value);
  };

  return (
    <div className="search-bar container" style={{paddingBottom: '20px'}} >
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Enter name of the food you wish to try"
          onChange={(e) => setValue(e.target.value)}
          type="text"
          id="search-box"
          value={value}
        />
        <button className="btn-small" type="submit">
          <i className="material-icons">search</i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
