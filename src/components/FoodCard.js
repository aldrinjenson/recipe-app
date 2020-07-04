import React from "react";

const FoodCard = ({ foodItem: { image, nutrients, label, category } }) => {
  const foodImage = image ? image : require("../no-preview.png");

  const totalEnergy = nutrients.PROCNT + nutrients.FAT + nutrients.CHOCDF;

  const protienRatio = nutrients.PROCNT / totalEnergy;
  const carbsRatio = (nutrients.PROCNT + nutrients.PROCNT) / totalEnergy;

  console.log(protienRatio);
  console.log(carbsRatio);

  let type = "Regular";
  let colour = "blue";
  if (protienRatio > 0.15) {
    type = "High Protein";
    colour = "blue";
  } else if (protienRatio >= 0.12 && protienRatio <= 0.15) {
    type = "Balanced";
    colour = "green";
  } else if (carbsRatio > 0.5) {
    type = "High Carb";
    colour = "red";
  }
  if (type==='Regular') return null

  return (
    <div classNameName="col s12 m4 ">
      <div className="card horizontal">
        <div
          className="card-image"
          style={!image ? { maxWidth: "65%", overflow: "hidden" } : null}
        >
          <img src={foodImage} style={!image ? { height: "100%" } : null} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h4 className="title">{label}</h4>
            <h5>
              Category: <strong>{category}</strong>
            </h5>
            <h5>
              Type: <strong>{type}</strong>
            </h5>
            <h5>
              Total Energy: <strong>{Math.ceil(totalEnergy)} kcal</strong>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
