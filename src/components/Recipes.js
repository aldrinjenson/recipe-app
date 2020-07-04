import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${searchQuery}`
      );
      const data = await result.json();
      setRecipes(data.hits);
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div className="recipes" id="recipes">
      <div className="row">
        {recipes ? (
          recipes.map((item) => (
            <RecipeCard key={item.food.foodId} foodItem={item.food} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default FoodList;
