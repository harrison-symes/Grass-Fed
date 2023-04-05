import { IRecipe } from "../../models/recipe.models";

interface IRecipeDescriptionProps {
  recipe: IRecipe;
}

const RecipeDescription = ({ recipe }: IRecipeDescriptionProps) => {
  return (
    <div>
      <div className="content">{recipe.shortDescription}</div>
      <img src={recipe.image} className="image recipe__image" />
      <div className="content">{recipe.longDescription}</div>
    </div>
  );
};

export default RecipeDescription;
