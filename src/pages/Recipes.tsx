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
      <section className="section">
        <h1 className="is-size-1">Recipes</h1>
        <RecipeFilters />
        <h2 className="is-size-5 mb4 fw6">
          Showing ({recipeCount}) recipe{recipeCount === 1 ? "" : "s"}
        </h2>
        <RecipeList />
        <Pagination totalPages={totalPages} />
      </section>
    </div>
  );
};

export default Recipes;
