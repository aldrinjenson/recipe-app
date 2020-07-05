import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  const [newList, setNewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${searchQuery}`
      );
      const data = await result.json();
      setRecipes(data.hits);
      setNewList(data.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [searchQuery]);

  let mealTypes = [
    ...new Set(
      recipes.map((item) =>
        item.recipe.mealType ? item.recipe.mealType[0] : null
      )
    ),
  ];
  let dietLabels = [
    ...new Set(
      recipes.map((item) =>
        item.recipe.mealType ? item.recipe.dietLabels[0] : null
      )
    ),
  ];
  let cuisineType = [
    ...new Set(
      recipes.map((item) =>
        item.recipe.cuisineType ? item.recipe.cuisineType[0] : null
      )
    ),
  ];

  const handleClick = (tag, val) => {
    console.log(tag, val);
    setNewList(
      recipes.filter((item) => item.recipe[tag] && item.recipe[tag][0] === val)
    );
  };
  console.log(newList);

  return (
    <div className="recipes" id="recipes">
      {isLoading ? (
        <div className="center">Loading..</div>
      ) : (
        <div>
          <h4>Available Filters:</h4>

          <div className="row">
            <div className="input-field col s6 m4">
              <h5>Meal Types:</h5>
              <select className="browser-default" id="">
                <option value="" disabled selected>
                  Choose your option
                </option>
                {mealTypes.map((item) => (
                  <option
                    onClick={() => handleClick("mealType", item)}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-field col s6 m4">
              <h5>Diet Labels:</h5>
              <select className="browser-default" id="">
                <option value="" disabled selected>
                  Choose your option
                </option>
                {dietLabels.map((item) => (
                  <option
                    onClick={() => handleClick("dietLabels", item)}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-field col s6 m4">
              <h5>Cuisine:</h5>
              <select className="browser-default" id="">
                <option value="" disabled selected>
                  Choose your option
                </option>
                {cuisineType.map((item) => (
                  <option
                    onClick={() => handleClick("cuisineType", item)}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            {newList.length ? (
              newList.map((item) => (
                <RecipeCard key={item} recipe={item.recipe} />
              ))
            ) : (
              <div>
                No such food item is available based on the selected criterions{" "}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
