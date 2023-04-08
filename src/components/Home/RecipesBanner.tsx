import { useNavigate } from "react-router";
import RightChevron from "../Icons/RightChevron";

const RecipesBanner = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/recipes");
  };

  return (
    <div className="home-hero hero is-info is-large" onClick={onClick}>
      <div className="hero-body flex items-center justify-center">
        <p className="title">
          Recipes <RightChevron />
        </p>
      </div>
    </div>
  );
};

export default RecipesBanner;
