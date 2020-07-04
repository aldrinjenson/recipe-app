import React from "react";

const SearchBar = ({ Search }) => {
  return (
    <div className="container">
      <div className="search-bar">
        <div className="input-field" style={{display:'flex', justifyContent:'center'}} >
          <input
            placeholder="Search"
            onChange={(e) => {
              Search(e.target.value);
            }}
            type="text"
            id="search-box"
          />
          <span className="btn-small">
            <i className="material-icons">search</i>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
