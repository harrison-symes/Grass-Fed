import { useSelector } from "react-redux";
import { IRecipe, IRecipeStep } from "../../models/recipe.models";
import { getServingsValue } from "../../selectors";
import RecipeIngredient from "./RecipeIngredient";

interface IRecipeStepIngredientsPanelProps {
  recipe: IRecipe;
  step: IRecipeStep;
}

const RecipeStepIngredientsPanel = (
  props: IRecipeStepIngredientsPanelProps
) => {
  const { recipe, step } = props;
  const servings = useSelector(getServingsValue);

  return (
    <article className="panel is-primary">
      <div className="panel-heading flex justify-between">
        <p>{step.groupName}</p>
        {servings && (
          <p>
            {servings} {servings <= 1 ? "Serving" : "Servings"}
          </p>
        )}
      </div>
      {(step.ingredients ?? []).map((ingredient) => (
        <RecipeIngredient
          recipe={props.recipe}
          ingredient={ingredient}
          key={`${step.groupName}-${ingredient.name}-ingredient`}
        />
      ))}
    </article>
  );
};

export default RecipeStepIngredientsPanel;
