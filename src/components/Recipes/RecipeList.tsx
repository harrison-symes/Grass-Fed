import { useSelector } from "react-redux";
import { getFilteredRecipes, getRecipesForPAge } from "../../selectors";
import RecipeCard from "./RecipeCard";
import NoRecipesFound from "./NoRecipesFound";

const RecipeList = () => {
  const recipes = useSelector(getRecipesForPAge);

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
