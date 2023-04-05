import { useMemo } from "react";
import { IRecipe } from "../../models/recipe.models";
import { measurementName, quantityText } from "../helpers/recipeHelpers";
import RecipeStepIngredientsPanel from "./RecipeStepIngredientPanel";

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
      {steps.map((step) => (
        <RecipeStepIngredientsPanel
          step={step}
          key={`${props.recipe}-${step.groupName}-step`}
        />
      ))}
    </div>
  );
};

export default RecipeIngredients;
