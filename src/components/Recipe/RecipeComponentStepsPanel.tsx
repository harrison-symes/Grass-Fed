import { IRecipe, IRecipeComponent } from "../../models/recipe.models";
import { useState } from "react";
import UpChevron from "../Icons/UpChevron";
import DownChevron from "../Icons/DownChevron";
import RecipeStep from "./RecipeStep";

import cn from "classnames";

interface IRecipeComponentStepsPanelProps {
  recipe: IRecipe;
  component: IRecipeComponent;
}

const RecipeComponentStepsPanel = (props: IRecipeComponentStepsPanelProps) => {
  const { component } = props;
  const [isOpen, setIsOpen] = useState(true);

  const chevron = isOpen ? <DownChevron /> : <UpChevron />;
  const hasMultiComponents =
    Array.isArray(props.recipe.components) &&
    props.recipe.components.length > 1;

  const onClickHeader = () => {
    if (hasMultiComponents) {
      setIsOpen((state) => !state);
    }
  };

  return (
    <article className="panel recipe-panel is-primary">
      <div
        className="panel-heading recipe-panel__header"
        onClick={onClickHeader}
      >
        <div className="flex items-center justify-between">
          <p>{component.componentName}</p>
          {hasMultiComponents && chevron}
        </div>
      </div>
      <div
        className={cn("panel recipe-panel__content is-primary", {
          "recipe-panel__content--active": isOpen,
        })}
      >
        {(component.steps ?? []).map((step, i) => (
          <RecipeStep
            recipe={props.recipe}
            step={step}
            key={`${component.componentName}-${step.text}-step`}
            component={component}
            stepNumber={i + 1}
          />
        ))}
      </div>
    </article>
  );
};

export default RecipeComponentStepsPanel;
