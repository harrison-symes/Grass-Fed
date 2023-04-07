import { useSelector } from "react-redux";
import { IRecipe, IRecipeIngredient } from "../../models/recipe.models";
import { getServingsValue } from "../../selectors";
import { quantityText } from "../helpers/recipeHelpers";

interface IIngredientQuantityProps {
  recipe: IRecipe;
  ingredient: IRecipeIngredient;
}

const IngredientQuantity = (props: IIngredientQuantityProps) => {
  const servings = useSelector(getServingsValue);

  const value = (props.ingredient.quantity / props.recipe.servings) * servings;

  return (
    <p className="fw5 inline-flex">
      {quantityText(value, props.ingredient.measurement)}
    </p>
  );
};

export default IngredientQuantity;
