import { useState } from "react";
import {
  IRecipe,
  IRecipeComponent,
  IRecipeStep,
} from "../../models/recipe.models";
import CheckMarkIcon from "../Icons/Cook copy";
import RecipeStepIngredient from "./RecipeStepIngredient";

interface IRecipeStepProps {
  recipe: IRecipe;
  step: IRecipeStep;
  component: IRecipeComponent;
  stepNumber: number;
}

const regex = /{([^}]+)}/g;

const RecipeStep = (props: IRecipeStepProps) => {
  const { step } = props;

  const [isChecked, setIsChecked] = useState(false);

  const sentenceParts = step.text.split(regex);

  console.log({ ingredients: sentenceParts });

  const renderSentence = () => {
    const regex = /{([^}]+)}/g;
    let match;
    let lastIndex = 0;
    const parts = [];

    while ((match = regex.exec(step.text)) !== null) {
      const textBefore = step.text.slice(lastIndex, match.index);
      const ingredientName = match[1];
      lastIndex = regex.lastIndex;
      parts.push(
        textBefore,
        <RecipeStepIngredient
          key={lastIndex}
          ingredient={ingredientName}
          component={props.component}
          recipe={props.recipe}
        />
      );
    }

    const textAfter = step.text.slice(lastIndex);
    parts.push(textAfter);

    return parts;
  };

  return (
    <a
      className="panel-block column"
      onClick={() => setIsChecked((state) => !state)}
    >
      <div className="w-100 flex justify-between items-start">
        <div className="recipe-panel__text">
          <p className="fw7">Step {props.stepNumber}:</p>{" "}
          {/* {sentenceParts.map((part) =>
            regex.test(part) ? (
              <RecipeStepIngredient
                component={props.component}
                ingredient={part.slice(1, -1)}
                recipe={props.recipe}
              />
            ) : (
              part
            )
          )} */}
          {renderSentence()}
        </div>
        <div className="">{isChecked && <CheckMarkIcon />}</div>
      </div>
      {step.image && (
        <img
          className="image recipe-panel__image mt3"
          src={step.image}
          alt={`Step ${props.stepNumber}`}
        />
      )}
    </a>
  );
};

export default RecipeStep;
