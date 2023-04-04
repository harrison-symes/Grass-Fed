import { useSelector } from "react-redux";
import { getFilteredRecipes, getRecipesForPAge } from "../../selectors";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const recipes = useSelector(getRecipesForPAge);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
