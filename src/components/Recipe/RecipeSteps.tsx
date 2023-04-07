import { useMemo } from "react";
import { IRecipe } from "../../models/recipe.models";
import RecipeIngredientsControls from "./controls/RecipeIngredientsControls";
import RecipeComponentStepsPanel from "./RecipeComponentSteps";

interface IRecipeStepsProps {
  recipe: IRecipe;
}

const RecipeSteps = (props: IRecipeStepsProps) => {
  const components = useMemo(
    () =>
      Array.isArray(props.recipe.components)
        ? props.recipe.components
        : [props.recipe.components],
    [props.recipe.components]
  );

  return (
    <div>
      <RecipeIngredientsControls recipe={props.recipe} />
      {components.map((step) => (
        <RecipeComponentStepsPanel
          key={`${props.recipe}-${step.groupName}-component-steps`}
          recipe={props.recipe}
          component={step}
        />
      ))}
    </div>
  );
};

export default RecipeSteps;
