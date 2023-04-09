import MinusIcon from "../Icons/Minus";
import PlusIcon from "../Icons/Plus";

interface IRecipeFiltersShowProps {
  isShown: boolean;
  onClick: () => void;
}

const RecipeFiltersShow = (props: IRecipeFiltersShowProps) => {
  return (
    <a className="recipe-filter-show is-size-6" onClick={props.onClick}>
      {props.isShown ? (
        <>
          <MinusIcon /> Hide filters
        </>
      ) : (
        <>
          <PlusIcon /> Show filters
        </>
      )}
    </a>
  );
};

export default RecipeFiltersShow;
