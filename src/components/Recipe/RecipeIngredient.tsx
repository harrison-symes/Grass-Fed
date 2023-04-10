import { useState } from "react";
import { IRecipe, IRecipeIngredient } from "../../models/recipe.models";
import CheckMarkIcon from "../Icons/Checkmark";
import IngredientQuantity from "./IngredientQuantity";
import cn from "classnames";

interface IRecipeIngredientProps {
  recipe: IRecipe;
  ingredient: IRecipeIngredient;
}

const RecipeIngredient = (props: IRecipeIngredientProps) => {
  const { ingredient } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <a
      className={cn("panel-block column recipe-panel__item", {
        "recipe-panel__item--active": isChecked,
      })}
      onClick={() => setIsChecked((state) => !state)}
    >
      <div className="w-100 flex justify-between items-center">
        <div className="flex justify-start items-center">
          {ingredient.name} {ingredient.isOptional && "(optional)"}
          {isChecked && <CheckMarkIcon iconProps={{ className: "is-green" }} />}
        </div>
        {ingredient.measurement !== undefined &&
          ingredient.quantity !== undefined && (
            <IngredientQuantity
              recipe={props.recipe}
              ingredient={props.ingredient}
            />
          )}
      </div>
    </a>
  );
};

export default RecipeIngredient;
