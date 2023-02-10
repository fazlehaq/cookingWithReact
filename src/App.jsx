import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import RecipeList from "./components/RecipeList";
import "./css/App.css";
import RecipeEdit from "./components/RecipeEdit";
import SearchBox from "./components/SearchBox";

const LOCAL_STORAGE_KEY = "RECIPE-APP-RECIPIES";

export const RecipeContext = React.createContext();

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState("");
  const [filterText, setFilterText] = useState("");
  const [recipes, setRecipes] = useState(() => {
    return getRecipes();
  });

  let filteredRecipies = [];
  if (filterText !== "") {
    filteredRecipies = getFilteredRecipiesId();
  }

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
      <SearchBox filterText={filterText} setFilterText={setFilterText} />
      <div className="App">
        <RecipeList recipes={filterText == "" ? recipes : filteredRecipies} />
        {selectedRecipe != null ? <RecipeEdit recipe={selectedRecipe} /> : null}
      </div>
    </RecipeContext.Provider>
  );

  function getFilteredRecipiesId() {
    return recipes.filter((recipe) => {
      const keys = Object.keys(recipe);
      return keys.some((key) => {
        return recipe[key]
          .toString()
          .toLowerCase()
          .includes(filterText.toLowerCase());
      });
    });
  }

  function getRecipes() {
    const savedRecipes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedRecipes?.length > 2) return JSON.parse(savedRecipes);
    return initialRecipes;
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
const initialRecipes = [
  {
    id: "c06e5865-7bbe-48b3-aeb8-24407d678c6a",
    name: "Roasted Chicken",
    cookTime: "00:30",
    servings: 2,
    instructions:
      "1.Clean the chicken.\n2.Put some salt.\n3.Add some curd and spices.\n4.Roast the chicken for 10 minutes",
    ingredients: [
      {
        id: "5a5eaa68-1ce3-4728-908d-9cc275315be4",
        name: "Chicken",
        quantity: "2 Pounds",
      },
      {
        id: "faac53dc-ff35-4f6c-80bc-faf8ae062c6e",
        name: "Curd",
        quantity: "100 Grams",
      },
    ],
  },
  {
    id: "854d75e8-e6e7-4d94-a81e-f552c86c4f04",
    name: "Salad",
    cookTime: "00:40",
    servings: 2,
    instructions:
      "1.Clean the Veegies.\n2.Put some salt.\n3.Add some spices.\n4.Roast the mixture on low flames for few minutes",
    ingredients: [
      {
        id: "0f27e01f-ce92-40e7-96b5-66faeb438a4e",
        name: "Tomatoes",
        quantity: 2,
      },
      {
        id: "0e7244e7-e839-46d2-9bc8-f424f2d202e5",
        name: "Carrot",
        quantity: 1,
      },
      {
        id: "b613e34e-e82d-4c62-b16f-f6c04eee8bfd",
        name: "Onion",
        quantity: 3,
      },
    ],
  },
];

export default App;
