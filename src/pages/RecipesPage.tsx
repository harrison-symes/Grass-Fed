import RecipeFilters from "../components/RecipeFilters/RecipeFilters";
import RecipeList from "../components/Recipes/RecipeList";
import { useSelector } from "react-redux";
import { getTotalRecipeCount, getTotalRecipePages } from "../selectors";
import Pagination from "../components/Pagination/Pagination";
import { useRef, useEffect } from "react";
import { QUERY_PARAMS } from "../constants/router.constants";
import useQueryUpdater from "../components/hooks/useQueryUpdater";

const RecipesPage = () => {
  const totalPages = useSelector(getTotalRecipePages);
  const recipeCount = useSelector(getTotalRecipeCount);

  const prevRecipesRef = useRef<number>(recipeCount);
  const queryUpdater = useQueryUpdater();

  const recipeListRef = useRef<HTMLDivElement>(null);

  const onPageChange = () => {
    recipeListRef.current?.scrollIntoView();
  };

  useEffect(() => {
    if (prevRecipesRef.current !== recipeCount) {
      queryUpdater({
        [QUERY_PARAMS.PAGE_NUMER]: null,
      });
    }

    prevRecipesRef.current = recipeCount;
  }, [recipeCount]);

  return (
    <div className="container">
      <h1 className="is-size-3">Recipes</h1>
      <RecipeFilters />
      <h2 className="is-size-5 mb4 fw6" ref={recipeListRef}>
        Showing ({recipeCount}) recipe{recipeCount === 1 ? "" : "s"}
      </h2>
      <RecipeList />
      <Pagination totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default RecipesPage;
