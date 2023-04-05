import { useSelector } from "react-redux";
import { getRecipeByUrl } from "../../selectors";
import RecipeNotFound from "./RecipeNotFound";

const Recipe = () => {
  const recipe = useSelector(getRecipeByUrl);

  if (recipe == null) {
    return <RecipeNotFound />;
  }

  return (
    <div className="container">
      <h1 className="is-size-1">{recipe.name}</h1>
    </div>
  );
};

export default Recipe;
