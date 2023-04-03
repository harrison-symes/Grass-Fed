import ResetFilters from "../Reset/ResetFilters";
import RecipeCategoryDropdown from "./RecipeCategoryDropdown";
import RecipePriceDropdown from "./RecipePriceDropdown";
import RecipeSearch from "./RecipeSearch";
import RecipeTimeDropdown from "./RecipeTimeDropdown";

const RecipeFilters = () => {
  return (
    <section className="section is-medium">
      <div className="block w-100">
        <RecipeSearch />
      </div>
      <div className="flex w-100 align-end">
        <RecipeCategoryDropdown />
        <RecipePriceDropdown />
        <RecipeTimeDropdown />
        <div className="justify-self-end">
          <ResetFilters />
        </div>
      </div>
    </section>
  );
};

export default RecipeFilters;
