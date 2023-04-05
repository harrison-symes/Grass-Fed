import { IRecipeStep } from "../../models/recipe.models";
import RecipeIngredient from "./RecipeIngredient";

interface IRecipeStepIngredientsPanelProps {
  step: IRecipeStep;
}

const RecipeStepIngredientsPanel = (
  props: IRecipeStepIngredientsPanelProps
) => {
  const { step } = props;

  return (
    <article className="panel is-primary">
      <div className="panel-heading flex justify-between">
        <p>{step.groupName}</p>
        {step.servings && (
          <p>
            {step.servings} {step.servings <= 1 ? "Serving" : "Servings"}
          </p>
        )}
      </div>
      {(step.ingredients ?? []).map((ingredient) => (
        <RecipeIngredient
          ingredient={ingredient}
          key={`${step.groupName}-${ingredient.name}-ingredient`}
        />
      ))}
    </article>
  );
};

export default RecipeStepIngredientsPanel;
