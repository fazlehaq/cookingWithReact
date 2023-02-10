import React, { useContext } from "react";
import IngredientEdit from "./IngredientEdit";
import { v4 } from "uuid";
import { RecipeContext } from "../App";
import "../css/recipe-edit.css";

function RecipeEdit({ recipe }) {
  const { handleChangeRecipe, handleCloseEditRecipe } =
    useContext(RecipeContext);

  function handleChange(changes) {
    handleChangeRecipe(recipe.id, { ...recipe, ...changes });
  }

  function handleAddIngredient() {
    const newIngredient = {
      id: v4(),
      name: "",
      amount: "",
    };

    handleChange({
      ingredients: [...recipe.ingredients, newIngredient],
    });
  }

  function handleIngredientDelete(id) {
    const newIngredients = [...recipe.ingredients].filter(
      (newIngredient) => newIngredient.id != id
    );
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(
      (newIngredient) => newIngredient.id == id
    );
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  return (
    <div id="recipe-edit">
      <div className="recipe-edit-close-btn-container ">
        <button
          onClick={handleCloseEditRecipe}
          className="recipe-edit-close-btn "
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit-details">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
          id="recipe-name"
        />

        <label htmlFor="cook-time">Cook Time</label>
        <input
          type="text"
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
          id="cook-time"
        />

        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          id="servings"
          onInput={(e) => handleChange({ servings: e.target.value })}
          value={recipe.servings}
        />

        <label htmlFor="recipe-edit-instruction">Instructions</label>
        <textarea
          id="recipe-edit-instruction"
          onInput={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
        />
      </div>

      <div className="recipe-edit-ingredients">
        <label>Ingredients</label>
        <div className="labels">
          <label>Name</label>
          <label>Amount</label>
        </div>

        <div className="recipe-edit-ingredients-grid">
          {recipe.ingredients.map((ingredient) => {
            return (
              <IngredientEdit
                handleIngredientChange={handleIngredientChange}
                handleIngredientDelete={handleIngredientDelete}
                key={ingredient.id}
                ingredient={ingredient}
              />
            );
          })}
        </div>

        <div className="add-ingredient-btn-container ">
          <button
            onClick={() => handleAddIngredient()}
            className="button add-ingredient-btn"
          >
            Add Ingradient
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeEdit;
