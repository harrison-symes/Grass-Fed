import { useSelector } from "react-redux";
import { getRecipesForPage } from "../../selectors";
import RecipeCard from "./RecipeCard";
import NoRecipesFound from "./NoRecipesFound";

import "./recipeList.scss";

const RecipeList = () => {
  const recipes = useSelector(getRecipesForPage);

  if (recipes.length === 0) {
    return <NoRecipesFound />;
  }

  return (
    <div className="recipe-list mb3" id="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
