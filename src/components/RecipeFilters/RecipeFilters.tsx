import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import RecipeCategoryDropdown from "./RecipeCategoryDropdown";
import RecipeSearch from "./RecipeSearch";

const RecipeFilters = () => {
  return (
    <section className="section is-medium">
      <div className="block w-100">
        <RecipeSearch />
      </div>
      <div className="block w-100">
        <RecipeCategoryDropdown />
      </div>
    </section>
  );
};

export default RecipeFilters;
