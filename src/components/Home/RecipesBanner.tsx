import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import RightChevron from "../Icons/RightChevron";

const RecipesBanner = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/recipes");
  };

  return (
    <section className="home-hero hero is-info is-large" onClick={onClick}>
      <div className="hero-body">
        <p className="title flex items-center justify-center">
          Recipes <RightChevron />
        </p>
      </div>
    </section>
  );
};

export default RecipesBanner;
