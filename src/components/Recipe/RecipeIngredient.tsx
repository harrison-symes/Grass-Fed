import { useState } from "react";
import { IRecipe, IRecipeIngredient } from "../../models/recipe.models";
import CheckMarkIcon from "../Icons/Cook copy";
import IngredientQuantity from "./IngredientQuantity";

interface IRecipeIngredientProps {
  recipe: IRecipe;
  ingredient: IRecipeIngredient;
}

const RecipeIngredient = (props: IRecipeIngredientProps) => {
  const { ingredient } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <a
      className="panel-block flex justify-between"
      onClick={() => setIsChecked((state) => !state)}
    >
      <div className="flex justify-start items-center">
        {ingredient.name} {isChecked && <CheckMarkIcon />}
      </div>
      <IngredientQuantity recipe={props.recipe} ingredient={props.ingredient} />
    </a>
  );
};

export default RecipeIngredient;
