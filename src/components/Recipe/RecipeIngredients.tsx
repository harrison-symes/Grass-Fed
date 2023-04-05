import { useMemo } from "react";
import { IRecipe } from "../../models/recipe.models";
import { measurementName, quantityText } from "../helpers/recipeHelpers";
import RecipeStepIngredientsPanel from "./RecipeStepIngredientPanel";
import RecipeIngredientsControls from "./controls/RecipeIngredientsControls";

interface IRecipeIngredientsProps {
  recipe: IRecipe;
}

const RecipeIngredients = (props: IRecipeIngredientsProps) => {
  const steps = useMemo(
    () =>
      Array.isArray(props.recipe.steps)
        ? props.recipe.steps
        : [props.recipe.steps],
    [props.recipe.steps]
  );

  return (
    <div>
      <RecipeIngredientsControls recipe={props.recipe} />
      {steps.map((step) => (
        <RecipeStepIngredientsPanel
          key={`${props.recipe}-${step.groupName}-step`}
          recipe={props.recipe}
          step={step}
        />
      ))}
    </div>
  );
};

export default RecipeIngredients;
