import { useMemo } from "react";
import { IRecipe } from "../../models/recipe.models";
import { measurementName, quantityText } from "../helpers/recipeHelpers";

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
        <article
          className="panel is-primary"
          key={`${props.recipe}-${step.groupName}-step`}
        >
          <div className="panel-heading flex justify-between">
            <p>{step.groupName}</p>
            {step.servings && (
              <p>
                {step.servings} {step.servings <= 1 ? "Serving" : "Servings"}
              </p>
            )}
          </div>
          {(step.ingredients ?? []).map((ingredient) => (
            <a
              className="panel-block flex justify-between"
              key={`${props.recipe}-${step.groupName}-${ingredient.name}-ingredient`}
            >
              <p>{ingredient.name}</p>
              <p className="">{quantityText(ingredient)}</p>
            </a>
          ))}
        </article>
      ))}
    </div>
  );
};

export default RecipeIngredients;
