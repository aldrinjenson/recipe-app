import React from "react";

const tagValueDict = {
  "Diet Label": "dietLabels",
  "Cuisine Type": "cuisineType",
  "Meal Types": "mealType",
};

const Filter = ({ tag, array, handleClick }) => {
  return (
    <div className="filter-select">
      <div className="input-field col s6 m4">
        <h5>{tag}</h5>
        <select
          className="browser-default"
          onChange={(e) => handleClick(tagValueDict[tag], e.target.value)}
        >
          <option defaultValue value="">
            All
          </option>
          {array.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
