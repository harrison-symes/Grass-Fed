import { Link, useNavigate } from "react-router-dom";

const RecipeNotFound = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/recipes");
  };

  return (
    <div className="notification is-warning is-large text-center w-100">
      <div>Could not find the recipe you were looking for.</div>
      <a className="ml1 text-center" onClick={onClick}>
        Back to Recipes
      </a>
    </div>
  );
};

export default RecipeNotFound;
