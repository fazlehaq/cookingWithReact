import { RecipeContext } from "../App";
import { useContext } from "react";

export default function SearchBox({ filterText, setFilterText }) {
  const { handleAddRecipe } = useContext(RecipeContext);
  return (
    <div className="search-box">
      <label>
        <span>Search Recipe</span>
        <input
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search For Recipie, Ingredient"
        />
      </label>
      <button
        onClick={() => {
          handleAddRecipe();
        }}
        className="button add-recipe-btn"
      >
        Add Reicpie
      </button>
    </div>
  );
}
