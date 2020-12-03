import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

const FoodList = ({ searchQuery }) => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${searchQuery}&app_id=${process.env.REACT_APP_FOOD_APP_ID}&app_key=${process.env.REACT_APP_FOOD_API_KEY}`
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
              <option value="" defaultValue>
                All
              </option>
              <option value="High Protein">High Protein</option>
              <option value="Balanced">Balanced</option>
              <option value="High Carb">High Carb</option>
              <option value="Regular">Regular</option>
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
