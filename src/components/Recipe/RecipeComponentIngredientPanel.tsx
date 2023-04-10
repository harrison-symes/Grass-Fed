import { IRecipe, IRecipeComponent } from "../../models/recipe.models";
import RecipeIngredient from "./RecipeIngredient";
import { useEffect, useRef, useState } from "react";
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
  const panelHeaderRef = useRef<HTMLDivElement>(null);

  const prevIsOpenRef = useRef<boolean>(isOpen);

  const chevron = isOpen ? <DownChevron /> : <UpChevron />;
  const hasMulticomponents =
    Array.isArray(props.recipe.components) &&
    props.recipe.components.length > 1;

  const onClickHeader = () => {
    if (hasMulticomponents) {
      setIsOpen((state) => !state);
    }
  };

  useEffect(() => {
    if (prevIsOpenRef.current !== isOpen) {
      setTimeout(() => {
        if (panelHeaderRef.current == null) {
          return;
        }

        const elementPosition =
          panelHeaderRef.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 68;

        prevIsOpenRef.current = isOpen;

        window.scrollTo({
          top: offsetPosition,
          behavior: "auto",
        });
      }, 400);
    }
  }, [isOpen]);

  return (
    <article
      className={cn("panel recipe-panel is-link", {
        "recipe-panel--active": isOpen,
      })}
    >
      <div
        className="panel-heading recipe-panel__header"
        onClick={onClickHeader}
        ref={panelHeaderRef}
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
        {component.note && (
          <a className="panel-block column recipe-panel__item">
            <b>Note:</b> {component.note}
          </a>
        )}
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
