import React from "react";

const RecipeCard = ({
  recipe: { mealType, label, dietLabels, url, cuisineType, calories, image },
}) => {
  return (
    <div className="col s12 m6 l4 recipe-card">
      <div className="card">
        <div className="card-image">
          <img src={image} alt={label} />
        </div>
        <div className="card-content">
          <h4 className="">{label}</h4>
          <ul style={{ textTransform: "capitalize" }}>
            <li>{dietLabels[0]}</li>
            <li>{Math.ceil(calories)} kcal</li>
            { cuisineType && <li>{cuisineType[0]} cusine</li>}
            { mealType && <li>Meal Type: {mealType[0]}</li>}
          </ul>
        </div>
        <div className="card-action">
          <a target="-blank" href={url}>
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
