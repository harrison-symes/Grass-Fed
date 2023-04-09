import { IRecipe, IRecipeComponent } from "../../models/recipe.models";
import RecipeIngredient from "./RecipeIngredient";
import { useState } from "react";
import UpChevron from "../Icons/UpChevron";
import DownChevron from "../Icons/DownChevron";

import cn from "classnames";

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
    <article
      className={cn("panel recipe-panel is-primary", {
        "recipe-panel--active": isOpen,
      })}
    >
      <div
        className="panel-heading recipe-panel__header"
        onClick={onClickHeader}
      >
        <div className="flex items-center justify-between">
          <p>{component.componentName}</p>
          {hasMulticomponents && chevron}
        </div>
      </div>
      <div
        className={cn("panel recipe-panel__content is-primary", {
          "recipe-panel__content--active": isOpen,
        })}
      >
        {(component.ingredients ?? []).map((ingredient) => (
          <RecipeIngredient
            recipe={props.recipe}
            ingredient={ingredient}
            key={`${component.componentName}-${ingredient.name}-ingredient`}
          />
        ))}
      </div>
    </article>
  );
};

export default RecipeComponentIngredientsPanel;
