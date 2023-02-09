import React from "react";
import { v4 } from "uuid";
import Ingredient from "./Ingredient";

function Ingredients({ ingredients }) {
  return (
    <div className="ingredients indent">
      {ingredients.map((ingredient) => {
        return <Ingredient key={v4()} {...ingredient} />;
      })}
    </div>
  );
}

export default Ingredients;
