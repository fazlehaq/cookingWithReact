import React from "react";

function Ingredient({ name, quantity }) {
  return (
    <div className="ingredient">
      <div>{name}</div>
      <div>{quantity}</div>
    </div>
  );
}

export default Ingredient;
