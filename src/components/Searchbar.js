import React, { useState } from "react";

const SearchBar = ({ setSearchQuery, placeholder,isFromRecipe }) => {
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
          placeholder={placeholder}
          onChange={(e) => {
            if(isFromRecipe) setSearchQuery(e.target.value)
            setValue(e.target.value)}}
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
