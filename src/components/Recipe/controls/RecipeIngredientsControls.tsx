import { IRecipe } from "../../../models/recipe.models";
import QuantityControl from "./QuantityControl";

interface IRecipeIngredientsControlsProps {
  recipe: IRecipe;
}

const RecipeIngredientsControls = (props: IRecipeIngredientsControlsProps) => {
  return (
    <div className="flex justify-end mb3">
      <QuantityControl />
    </div>
  );
};

export default RecipeIngredientsControls;
