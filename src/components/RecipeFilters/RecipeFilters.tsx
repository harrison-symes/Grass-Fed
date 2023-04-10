import { useState } from "react";
import ResetFilters from "../Reset/ResetFilters";
import RecipeCategoryDropdown from "./RecipeCategoryDropdown";
import RecipeFiltersShow from "./RecipeFiltersShow";
import RecipePriceDropdown from "./RecipePriceDropdown";
import RecipeSearch from "./RecipeSearch";
import RecipeTimeDropdown from "./RecipeTimeDropdown";
import cn from "classnames";

const RecipeFilters = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container mb4">
      <div className="block w-100">
        <RecipeSearch />
      </div>
      <div
        className={cn("recipe-filters flex w-100 align-end", {
          "is-shown": isShown,
        })}
      >
        <div className="recipe-filter__group">
          <RecipePriceDropdown />
          <RecipeTimeDropdown />
        </div>
        <div className="recipe-filter__group">
          <RecipeCategoryDropdown />
        </div>
        <div className="recipe-filter-reset">
          <ResetFilters />
        </div>
      </div>
      <div>
        <RecipeFiltersShow
          isShown={isShown}
          onClick={() => setIsShown((state) => !state)}
        />
      </div>
      <hr className="hr mt2" />
    </div>
  );
};

export default RecipeFilters;
