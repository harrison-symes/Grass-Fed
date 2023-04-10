import { IRecipe } from "../../models/recipe.models";

interface IRecipeDescriptionProps {
  recipe: IRecipe;
}

const RecipeDescription = ({ recipe }: IRecipeDescriptionProps) => {
  return (
    <article className="panel recipe__description is-primary">
      <p className="panel-heading">{recipe.name}</p>
      <div className="panel-block">{recipe.shortDescription}</div>
      <img src={recipe.image} className="image recipe__image panel-block" />
    </article>
  );
};

export default RecipeDescription;
