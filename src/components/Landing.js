import React from "react";

const Landing = () => {
  return (
    <div
      className="landing-page "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '60vh',
      }}
    >
      <div className="center-align">
        <h2 className="green-text text-darken-4">Food & Recipes</h2>
        <h5 className="green-text text-lighten-1">
          Make your quarantine Healthy and Productive!
        </h5>
      </div>
    </div>
  );
};

export default Landing;
