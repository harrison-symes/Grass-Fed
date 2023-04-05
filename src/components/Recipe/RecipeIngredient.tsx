import {
  IRecipe,
  IRecipeIngredient,
  IRecipeStep,
} from "../../models/recipe.models";
import { quantityText } from "../helpers/recipeHelpers";

interface IRecipeIngredientProps {
  ingredient: IRecipeIngredient;
}

const RecipeIngredient = (props: IRecipeIngredientProps) => {
  const { ingredient } = props;

  return (
    <a className="panel-block flex justify-between">
      <p>{ingredient.name}</p>
      <p className="">{quantityText(ingredient)}</p>
    </a>
  );
};

export default RecipeIngredient;
