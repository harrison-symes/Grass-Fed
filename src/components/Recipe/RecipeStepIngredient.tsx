import { useSelector } from "react-redux";
import { IRecipe, IRecipeComponent } from "../../models/recipe.models";
import { getServingsValue } from "../../selectors";
import IngredientQuantity from "./IngredientQuantity";
import { pluraliseIngredient } from "../helpers/recipeHelpers";

interface IRecipeStepIngredientProps {
  recipe: IRecipe;
  component: IRecipeComponent;
  ingredient: string;
}

const RecipeStepIngredient = (props: IRecipeStepIngredientProps) => {
  const servings = useSelector(getServingsValue);

  const matchingIngredient = props.component.ingredients?.find(
    (ingredient) => ingredient.name === props.ingredient
  );

  console.log({ matchingIngredient });

  if (matchingIngredient === undefined) {
    return <>{props.ingredient}</>;
  }

  const QuantityText = (
    <IngredientQuantity ingredient={matchingIngredient} recipe={props.recipe} />
  );

  const quantityValue =
    (matchingIngredient.quantity ?? 1 / props.recipe.servings) * servings;

  return (
    <p className="fw5 inline-flex">
      {pluraliseIngredient(
        matchingIngredient?.name,
        quantityValue,
        matchingIngredient.measurement
      )}{" "}
      ({QuantityText})
    </p>
  );
};

export default RecipeStepIngredient;
