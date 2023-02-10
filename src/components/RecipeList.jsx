import Recipe from "./Recipe";
import "../css/recipe-list.css";

function RecipeList({ recipes }) {
  return (
    <>
      <div id="recipe-list">
        {recipes.map((recipe) => {
          return <Recipe {...recipe} key={recipe.id} />;
        })}
      </div>
    </>
  );
}

export default RecipeList;
