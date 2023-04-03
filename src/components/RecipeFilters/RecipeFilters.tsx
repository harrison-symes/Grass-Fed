import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import ResetFilters from "../Reset/ResetFilters";
import RecipeCategoryDropdown from "./RecipeCategoryDropdown";
import RecipeSearch from "./RecipeSearch";

const RecipeFilters = () => {
  return (
    <section className="section is-medium">
      <div className="block w-100">
        <RecipeSearch />
      </div>
      <div className="flex w-100 align-end">
        <RecipeCategoryDropdown />
        <ResetFilters />
      </div>
    </section>
  );
};

export default RecipeFilters;
