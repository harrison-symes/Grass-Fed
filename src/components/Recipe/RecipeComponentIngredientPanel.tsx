import { IRecipe, IRecipeComponent } from "../../models/recipe.models";
import RecipeIngredient from "./RecipeIngredient";
import { useState } from "react";
import UpChevron from "../Icons/UpChevron";
import DownChevron from "../Icons/DownChevron";

interface IRecipeComponentIngredientsPanelProps {
  recipe: IRecipe;
  component: IRecipeComponent;
}

const RecipeComponentIngredientsPanel = (
  props: IRecipeComponentIngredientsPanelProps
) => {
  const { component } = props;
  const [isOpen, setIsOpen] = useState(true);

  const chevron = isOpen ? <DownChevron /> : <UpChevron />;
  const hasMulticomponents =
    Array.isArray(props.recipe.components) &&
    props.recipe.components.length > 1;

  const onClickHeader = () => {
    if (hasMulticomponents) {
      setIsOpen((state) => !state);
    }
  };

  return (
    <article className="panel is-primary">
      <div
        className="panel-heading recipe-panel__header flex items-center justify-between"
        onClick={onClickHeader}
      >
        <p>{component.groupName}</p>
        {hasMulticomponents && chevron}
      </div>
      {isOpen &&
        (component.ingredients ?? []).map((ingredient) => (
          <RecipeIngredient
            recipe={props.recipe}
            ingredient={ingredient}
            key={`${component.groupName}-${ingredient.name}-ingredient`}
          />
        ))}
    </article>
  );
};

export default RecipeComponentIngredientsPanel;
