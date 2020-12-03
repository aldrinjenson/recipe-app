import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Filter from "./Filter";

const Recipes = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.edamam.com/search?app_id=${process.env.REACT_APP_RECIPE_APP_ID}&app_key=${process.env.REACT_APP_RECIPIE_API_KEY}&q=${searchQuery}`
      );
      const data = await result.json();
      setRecipes(data.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [searchQuery]);

  const [constraints, setConstraints] = useState({
    mealType: "",
    dietLabels: "",
    cuisineType: "",
  });

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
  ].filter((label) => label !== undefined);

  let cuisineType = [
    ...new Set(
      recipes.map((item) =>
        item.recipe.cuisineType ? item.recipe.cuisineType[0] : null
      )
    ),
  ];

  const handleClick = (tag, val) => {
    console.log(tag, val);
    setConstraints({
      ...constraints,
      [tag]: val,
    });
  };

  const applyConstraints = (recipes, constraints) => {
    const mealFilter = (recipe, mealType) => {
      if (mealType === "") return true;
      return mealType === recipe.mealType[0];
    };

    const dietFilter = (recipe, dietLabels) => {
      if (dietLabels === "") return true;
      return dietLabels === recipe.dietLabels[0];
    };

    const cuisineFilter = (recipe, cuisine) => {
      return cuisine === "" || cuisine === recipe.cuisineType[0];
    };

    const constrainedRecipes = recipes.filter((recipe) => {
      return (
        mealFilter(recipe.recipe, constraints.mealType) &&
        dietFilter(recipe.recipe, constraints.dietLabels) &&
        cuisineFilter(recipe.recipe, constraints.cuisineType)
      );
    });
    return constrainedRecipes;
  };

  const filteredRecipes = !isLoading
    ? applyConstraints(recipes, constraints)
    : [];

  return (
    <div className="recipes" id="recipes">
      {isLoading ? (
        <div className="center">Loading..</div>
      ) : (
        <div>
          <h4>Available Filters:</h4>
          <div className="row">
            <Filter
              tag={"Meal Types"}
              array={mealTypes}
              handleClick={handleClick}
            />
            <Filter
              tag={"Diet Label"}
              array={dietLabels}
              handleClick={handleClick}
            />
            <Filter
              tag={"Cuisine Type"}
              array={cuisineType}
              handleClick={handleClick}
            />
          </div>

          <div className="row" style={{ minHeight: "30vh" }}>
            {!isLoading ? (
              filteredRecipes.length ? (
                <div>
                  <div className="green-text text-darken-2">
                    {filteredRecipes.length} recipes found
                  </div>
                  <br />
                  {filteredRecipes.map((item) => (
                    <RecipeCard key={item.recipe.uri} recipe={item.recipe} />
                  ))}
                </div>
              ) : (
                <div style={{ height: "30vh" }} className="center">
                  <p>
                    No such food item is available based on the selected
                    criterions
                  </p>
                  <br />
                  <p>Please try changing the filters</p>
                  <br />
                </div>
              )
            ) : (
              <div className="center">Loading..</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
