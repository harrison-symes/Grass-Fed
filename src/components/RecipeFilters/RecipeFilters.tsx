import ResetFilters from "../Reset/ResetFilters";
import RecipeCategoryDropdown from "./RecipeCategoryDropdown";
import RecipePriceDropdown from "./RecipePriceDropdown";
import RecipeSearch from "./RecipeSearch";
import RecipeTimeDropdown from "./RecipeTimeDropdown";

const RecipeFilters = () => {
  return (
    <section className="section">
      <div className="block w-100">
        <RecipeSearch />
      </div>
      <div className="recipe-filters flex w-100 align-end">
        <RecipeCategoryDropdown />
        <RecipePriceDropdown />
        <RecipeTimeDropdown />
        <div className="ml-auto">
          <ResetFilters />
        </div>
      </div>
    </section>
  );
};

export default RecipeFilters;
