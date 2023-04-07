import { useSelector } from "react-redux";
import { getRecipeByUrl, getRecipeTabParam } from "../../selectors";
import RecipeNotFound from "./RecipeNotFound";

import "./recipe.scss";
import RecipeDescription from "./RecipeDescription";
import RecipeTabs from "./RecipeTabs";
import RecipeIngredients from "./RecipeIngredients";
import RecipeSteps from "./RecipeSteps";

const Recipe = () => {
  const recipe = useSelector(getRecipeByUrl);
  const activeTab = useSelector(getRecipeTabParam);

  if (recipe == null) {
    return <RecipeNotFound />;
  }

  return (
    <div className="container">
      <h1 className="recipe__title is-size-1">{recipe.name}</h1>
      <RecipeTabs />
      {activeTab === null && <RecipeDescription recipe={recipe} />}
      {activeTab === "ingredients" && <RecipeIngredients recipe={recipe} />}
      {activeTab === "steps" && <RecipeSteps recipe={recipe} />}
    </div>
  );
};

export default Recipe;
