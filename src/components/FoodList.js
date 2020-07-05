import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import Filter from "./Filter";

const FoodList = ({ searchQuery }) => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${searchQuery}&app_id=44ce0161&app_key=1bbf1aa0046b6f820792715165b5a03c`
      );
      const data = await result.json();
      setFoods(data.hints);
      setIsLoading(false);
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div className="foodlist" id="foodlist">
      {isLoading ? (
        <div className="center">Loading...</div>
      ) : (
        <div>
          <h4>Sort by Food Energy Type: </h4>
          <div className="row">
            <div className="input-field col s6 m4"></div>
            <select
              className="browser-default"
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option disabled selected>
                Choose your option
              </option>
              <option value="High Protein">High Protein</option>
              <option value="Balanced">Balanced</option>
              <option value="High Carb">High Carb</option>
              <option value="Regular">Regular</option>
              <option value="">Clear Filter</option>
            </select>
          </div>

          <div className="row">
            {foods.map((item) => (
              <FoodCard
                key={item.food.foodId}
                foodItem={item.food}
                itemType={selectedValue}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodList;
