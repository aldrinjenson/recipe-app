import React from 'react'

const RecipeCard = ({ recipe }) => {
  return (
    <div className="col s12 m6 l4 recipe-card">
      <div className="card">
        <div className="card-image">
          <img src={recipe.image} />
        </div>
        <div className="card-content">
          <h4 className="">{recipe.label}</h4>
          <ul>
            <li>{recipe.dietLabels[0]}</li>
            <li>{Math.ceil(recipe.calories)} kcal</li>
            <li>{recipe.cuisineType[0]} cusine</li>
            <li>Meal Type: {recipe.mealType[0]}</li>
          </ul>
        </div>
        <div className="card-action">
          <a href={recipe.url}>More Details</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard