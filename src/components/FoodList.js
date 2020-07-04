import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

const FoodList = ({ searchQuery }) => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      <div className="row">
        {isLoading ? (
          <div className='center'>Loading...</div>
        ) : (
          foods.map((item) => (
            <FoodCard key={item.food.foodId} foodItem={item.food} />
          ))
        )}
      </div>
    </div>
  );
};

export default FoodList;
