import React from "react";
import Ingredients from "./Ingredients";
import "../css/recipe.css";
import { useContext } from "react";
import { RecipeContext } from "../App";

function Recipe(props) {
  const { name, instructions, servings, cookTime, ingredients, id } = props;
  const { handleDeleteRecipe, handleEditRecipe } = useContext(RecipeContext);
  return (
    <div className="recipe">
      <header className="flex">
        <h2 className="recipe-name">{name}</h2>
        <div className="buttons flex">
          <button
            className="button button-edit"
            onClick={() => handleEditRecipe(id)}
          >
            Edit
          </button>
          <button
            className="button button-delete"
            onClick={() => handleDeleteRecipe(id)}
          >
            Delete
          </button>
        </div>
      </header>

      <div className="details">
        <div className="flex flex-row section">
          <span className="label">Cook Time</span>
          <span className="label-value">{cookTime}</span>
        </div>
        <div className="flex flex-row section">
          <span className="label">Servings</span>
          <span className="label-value">{servings}</span>
        </div>
        <br />
        <div className="">
          <div className="label">Instructions</div>
          <div className="instructions">{instructions}</div>
        </div>
        <br />
        <div className="">
          <div className="label">Ingredients</div>
          <Ingredients ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
