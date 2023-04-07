import { IRecipe, IRecipeComponent } from "../../models/recipe.models";
import { useState } from "react";
import UpChevron from "../Icons/UpChevron";
import DownChevron from "../Icons/DownChevron";
import RecipeStep from "./RecipeStep";

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
    <article className="panel is-primary">
      <div
        className="panel-heading recipe-panel__header flex item-center justify-between"
        onClick={onClickHeader}
      >
        <p>{component.groupName}</p>
        {hasMultiComponents && chevron}
      </div>
      {isOpen &&
        (component.steps ?? []).map((step, i) => (
          <RecipeStep
            recipe={props.recipe}
            step={step}
            key={`${component.groupName}-${step.text}-step`}
            component={component}
            stepNumber={i + 1}
          />
        ))}
    </article>
  );
};

export default RecipeComponentStepsPanel;
