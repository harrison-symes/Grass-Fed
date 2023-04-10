import { useNavigate } from "react-router-dom";
import { IRecipe } from "../../models/recipe.models";
import PriceIcons from "../Price/PriceIcons";
import TimeIcons from "../Time/TimeIcons";

import Ellipsis from "../Ellipsis/Ellipsis";

interface IRecipeProps {
  recipe: IRecipe;
}

const RecipeCard = (props: IRecipeProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/recipes/${props.recipe.id}`);
  };

  // const text =
  //   props.recipe.shortDescription.length > 140
  //     ? `${props.recipe.shortDescription.slice(0, 130)}...`
  //     : props.recipe.shortDescription;

  // const text = clamp(props.recipe.shortDescription, { clamp: 140 });

  return (
    <div className="card recipe-card" onClick={onClick}>
      <div className="card-header">
        <p className="card-header-title">{props.recipe.name}</p>
      </div>
      <div className="card-image mt3">
        <figure className="image">
          <img src={props.recipe.image} alt={props.recipe.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <Ellipsis text={props.recipe.shortDescription} max={200} />
        </div>
      </div>
      <div className="card-footer">
        <p className="card-footer-item">
          <TimeIcons value={props.recipe.time} />
        </p>
        <p className="card-footer-item">
          <PriceIcons value={props.recipe.cost} />
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
