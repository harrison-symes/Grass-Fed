import { IRecipe } from "../../models/recipe.models";

interface IRecipeProps {
  recipe: IRecipe;
}

const Recipe = (props: IRecipeProps) => {
  return <div>{props.recipe.name}</div>;
};

export default Recipe;
