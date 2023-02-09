import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "../css/recipe-list.css";
import { useContext } from "react";
import { RecipeContext } from "../App";

// const recipes = [
//   {
//     id: "8059a1f7-644a-4471-8043-5678d9d4ed00",
//     name: "Plain Chicken",
//     servings: 3,
//     cookTime: "1:45",
//     instructions: [
//       "Put a salt on chicken",
//       "Put chicken in oven",
//       "Eat the chicken",
//     ],
//     ingredients: [
//       {
//         name: "Chicken",
//         quantity: "500 Grams",
//       },
//       {
//         name: "Salt",
//         quantity: "1 Tbs",
//       },
//     ],
//   },
//   {
//     id: "cb990317-b369-425a-a09c-2b06f525bbac",
//     name: "Chicken Afghani",
//     servings: 2,
//     cookTime: "1:00",
//     instructions: [
//       "Clean the chicken",
//       "Marinate the chicken",
//       "Put the spices",
//       "Roast the chicken",
//     ],
//     ingredients: [
//       {
//         name: "Chicken",
//         quantity: "700 Grams",
//       },
//       {
//         name: "Salt",
//         quantity: "2 Tbs",
//       },
//       {
//         name: "Curd",
//         quantity: "10 0 Grams",
//       },
//     ],
//   },
// ];

function RecipeList({ recipes }) {
  const { handleAddRecipe } = useContext(RecipeContext);
  return (
    <>
      <div id="recipe-list">
        {recipes.map((recipe) => {
          return <Recipe {...recipe} key={recipe.id} />;
        })}
        <button
          onClick={() => {
            handleAddRecipe();
          }}
        >
          New Reicpie
        </button>
      </div>
    </>
  );
}

export default RecipeList;
