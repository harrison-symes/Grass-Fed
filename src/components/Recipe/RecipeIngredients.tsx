import { useMemo } from "react";
import { IRecipe } from "../../models/recipe.models";
import RecipeComponentIngredientsPanel from "./RecipeComponentIngredientPanel";

interface IRecipeIngredientsProps {
  recipe: IRecipe;
}

const RecipeIngredients = (props: IRecipeIngredientsProps) => {
  const components = useMemo(
    () =>
      Array.isArray(props.recipe.components)
        ? props.recipe.components
        : [props.recipe.components],
    [props.recipe.components]
  );

  return (
    <div className="recipe__ingredients">
      {components.map((step) => (
        <RecipeComponentIngredientsPanel
          key={`${props.recipe}-${step.componentName}-component-ingredients`}
          recipe={props.recipe}
          component={step}
        />
      ))}
    </div>
  );
};

export default RecipeIngredients;
