import { useMemo } from "react";
import { IRecipe } from "../../models/recipe.models";
import RecipeComponentStepsPanel from "./RecipeComponentStepsPanel";

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
    <div className="recipe__steps">
      {components.map((step) => (
        <RecipeComponentStepsPanel
          key={`${props.recipe}-${step.componentName}-component-steps`}
          recipe={props.recipe}
          component={step}
        />
      ))}
    </div>
  );
};

export default RecipeSteps;
