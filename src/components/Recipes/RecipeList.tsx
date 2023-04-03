import { useSelector } from "react-redux";
import { getFilteredRecipes } from "../../selectors";
import Recipe from "./Recipe";

const RecipeList = () => {
  const recipes = useSelector(getFilteredRecipes);
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
