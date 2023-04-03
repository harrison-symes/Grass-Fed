import { useSelector } from "react-redux";
import { getFilteredRecipes } from "../../selectors";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const recipes = useSelector(getFilteredRecipes);
  return (
    <div className="flex flex-wrap align-start justify-start">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
