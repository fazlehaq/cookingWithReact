import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import RecipeList from "./components/RecipeList";
import "./css/App.css";
import RecipeEdit from "./components/RecipeEdit";

const LOCAL_STORAGE_KEY = "RECIPE-APP-RECIPIES";

export const RecipeContext = React.createContext();

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState("");
  const [recipes, setRecipes] = useState(() => {
    return getRecipes();
  });

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id == selectedRecipeId
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleEditRecipe,
    handleDeleteRecipe,
    handleAddRecipe,
    handleChangeRecipe,
    handleCloseEditRecipe,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <div className="App">
        <RecipeList recipes={recipes} />
        {selectedRecipe != null ? <RecipeEdit recipe={selectedRecipe} /> : null}
      </div>
    </RecipeContext.Provider>
  );

  function getRecipes() {
    const savedRecipes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedRecipes != null) return JSON.parse(savedRecipes);
    return [];
    // return [
    //   {
    //     id: "8059a1f7-644a-4471-8043-5678d9d4ed00",
    //     name: "Plain Chicken",
    //     servings: 3,
    //     cookTime: "1:45",
    //     instructions:
    //       "Put a salt on chicken\nPut chicken in oven\nEat the chicken",

    //     ingredients: [
    //       {
    //         id: v4(),
    //         name: "Chicken",
    //         quantity: "500 Grams",
    //       },
    //       {
    //         id: v4(),
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
    //     instructions:
    //       "Clean the chicken\nMarinate the chicken\nPut the spices\nRoast the chicken",
    //     ingredients: [
    //       {
    //         id: v4(),
    //         name: "Chicken",
    //         quantity: "700 Grams",
    //       },
    //       {
    //         id: v4(),
    //         name: "Salt",
    //         quantity: "2 Tbs",
    //       },
    //       {
    //         id: v4(),
    //         name: "Curd",
    //         quantity: "10 0 Grams",
    //       },
    //     ],
    //   },
    // ];
  }

  function handleChangeRecipe(id, newRecipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((recipe) => recipe.id == id);
    newRecipes[index] = newRecipe;
    setRecipes(newRecipes);
  }

  function handleAddRecipe() {
    const newRecipe = {
      id: v4(),
      name: "New Recipe",
      cookTime: "00:00",
      servings: "1",
      instructions: "Instructions",
      ingredients: [],
    };

    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleDeleteRecipe(id) {
    if (selectedRecipe == null || selectedRecipeId != id)
      return setRecipes(recipes.filter((recipe) => recipe.id !== id));

    alert("Recipe Opend For Edit! Close The Edit Section To Delete");
  }

  function handleEditRecipe(id) {
    setSelectedRecipeId(id);
  }

  function handleCloseEditRecipe() {
    setSelectedRecipeId("");
  }
}

export default App;
