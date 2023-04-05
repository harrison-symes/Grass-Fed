import { useSelector } from "react-redux";
import { IRecipe, IRecipeStep } from "../../models/recipe.models";
import { getServingsValue } from "../../selectors";
import RecipeIngredient from "./RecipeIngredient";
import { useState } from "react";
import UpChevron from "../Icons/UpChevron";
import DownChevron from "../Icons/DownChevron";

interface IRecipeStepIngredientsPanelProps {
  recipe: IRecipe;
  step: IRecipeStep;
}

const RecipeStepIngredientsPanel = (
  props: IRecipeStepIngredientsPanelProps
) => {
  const { step } = props;
  const servings = useSelector(getServingsValue);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <article className="panel is-primary">
      <div
        className="panel-heading flex justify-between"
        onClick={() => setIsOpen((state) => !state)}
      >
        <p className="flex items-center">
          {step.groupName} {isOpen ? <DownChevron /> : <UpChevron />}
        </p>
        {servings && (
          <p>
            {servings} {servings <= 1 ? "Serving" : "Servings"}
          </p>
        )}
      </div>
      {isOpen &&
        (step.ingredients ?? []).map((ingredient) => (
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
