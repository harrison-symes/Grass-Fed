import { useNavigate } from "react-router-dom";
import { IRecipe } from "../../models/recipe.models";
import { costText, speedText } from "../helpers/recipeHelpers";
import { useDispatch } from "react-redux";
import { replace } from "redux-first-history";

interface IRecipeProps {
  recipe: IRecipe;
}

const RecipeCard = (props: IRecipeProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/recipes/${props.recipe.id}`);
  };

  return (
    <div className="card recipe-card" onClick={onClick}>
      <div className="card-header">
        <p className="card-header-title">{props.recipe.name}</p>
      </div>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.recipe.image} alt={props.recipe.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">{props.recipe.shortDescription}</div>
      </div>
      <div className="card-footer">
        <p className="card-footer-item">
          Speed: {speedText(props.recipe.time)}
        </p>
        <p className="card-footer-item">Cost: {costText(props.recipe.cost)}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
