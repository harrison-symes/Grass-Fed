import { useSelector } from "react-redux";
import { getRecipeByUrl, getRecipeTabParam } from "../../selectors";
import RecipeNotFound from "./RecipeNotFound";

import RecipeDescription from "./RecipeDescription";
import RecipeTabs from "./RecipeTabs";
import RecipeIngredients from "./RecipeIngredients";
import RecipeSteps from "./RecipeSteps";
import RecipeIngredientsControls from "./controls/RecipeIngredientsControls";
import { goBack } from "redux-first-history";
import { useDispatch } from "react-redux";

const Recipe = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(getRecipeByUrl);
  const activeTab = useSelector(getRecipeTabParam);

  if (recipe == null) {
    return <RecipeNotFound />;
  }

  return (
    <div className="container">
      <h1 className="recipe__title is-size-3">{recipe.name}</h1>
      <RecipeTabs />
      <div className="flex justify-between items-center">
        <a onClick={() => dispatch(goBack())} className="is-size-5">
          Go back
        </a>
        <RecipeIngredientsControls recipe={recipe} />
      </div>
      {activeTab === null && (
        <div className="recipe__all">
          <div className="recipe__block">
            <h2 className="is-size-4 mb2">About this recipe</h2>
            <RecipeDescription recipe={recipe} />
          </div>
          <div className="recipe__block">
            <h2 className="is-size-4 mb2">Ingredients</h2>
            <RecipeIngredients recipe={recipe} />
          </div>
          <div className="recipe__block recipe__block--large">
            <h2 className="is-size-4 mb2">Steps</h2>
            <RecipeSteps recipe={recipe} />
          </div>
        </div>
      )}
      {activeTab !== null && (
        <div>
          {activeTab === "ingredients" && <RecipeIngredients recipe={recipe} />}
          {activeTab === "steps" && <RecipeSteps recipe={recipe} />}
        </div>
      )}
    </div>
  );
};

export default Recipe;
