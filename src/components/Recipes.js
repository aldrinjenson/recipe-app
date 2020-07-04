import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./Searchbar";

const Recipes = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    M.AutoInit();

    const fetchData = async () => {
      const result = await fetch(
        `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${searchQuery}`
      );
      const data = await result.json();
      setRecipes(data.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [searchQuery]);

  // const [filteredList, setFilteredList] = useState([]);
  const [cuisineQuery, setCuisineQuery] = useState("");

  // const handleChange = (e) => {
  //   const val = e.target.value;
  //   let newList;
  //   if (e == 0) return;
  //   else if (e == 1) newList = recipes.filter((item) => item.calories > 2000);
  //   else if (e == -1) newList = recipes.filter((item) => item.calories < 2000);

  //   setFilteredList(newList);
  // };
  // console.log(filteredList);
  return (
    <div className="recipes" id="recipes">
      {/* <div className="input-field col s12 m6">
        <select onChange={handleChange}>
          <option value="" disabled selected>
            Filter by energy values:
          </option>
          <option value="-1">Energy below 2000 kcal</option>
          <option value="1">Energy above 2000 kcal</option>
          <option value="0">Clear filter</option>
        </select>
        {/* <label>Chose Energy values</label> */}
      {/* </div>  */}

      <div>
        <p>Filter by cuisine:</p>
        <SearchBar setSearchQuery={setCuisineQuery} />
      </div>

      <div className="row">
        {isLoading ? (
          <div className="center">Loading...</div>
        ) : (
          recipes
            .filter((item) =>
              item.recipe.cuisineType[0].includes(cuisineQuery.toLowerCase())
            )
            .map((item) => <RecipeCard key={item} recipe={item.recipe} />)
        )}
      </div>
    </div>
  );
};

export default Recipes;
