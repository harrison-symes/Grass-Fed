import RecipeFilters from "../components/RecipeFilters/RecipeFilters";
import RecipeList from "../components/Recipes/RecipeList";
import { useSelector } from "react-redux";
import { getTotalRecipeCount, getTotalRecipePages } from "../selectors";
import Pagination from "../components/Pagination/Pagination";

const Recipes = () => {
  const totalPages = useSelector(getTotalRecipePages);
  const recipeCount = useSelector(getTotalRecipeCount);

  return (
    <div className="container">
      <h1 className="is-size-1">Recipes</h1>
      <RecipeFilters />
      <h2 className="is-size-2 mb3">
        {recipeCount} recipe{recipeCount === 1 ? "" : "s"} found
      </h2>
      <RecipeList />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Recipes;
