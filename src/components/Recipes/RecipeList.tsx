import { useSelector } from "react-redux";
import { getRecipesForPage } from "../../selectors";
import RecipeCard from "./RecipeCard";
import NoRecipesFound from "./NoRecipesFound";
import { useEffect, useRef } from "react";
import { IRecipe } from "../../models/recipe.models";
import useQueryUpdater from "../hooks/useQueryUpdater";
import { QUERY_PARAMS } from "../../constants/router.constants";

const RecipeList = () => {
  const recipes = useSelector(getRecipesForPage);
  const queryUpdater = useQueryUpdater();

  const prevRecipesRef = useRef<IRecipe[]>(recipes);

  useEffect(() => {
    if (prevRecipesRef.current.length !== recipes.length) {
      queryUpdater({
        [QUERY_PARAMS.PAGE_NUMER]: null,
      });
    }

    prevRecipesRef.current = recipes;
  }, [recipes]);

  if (recipes.length === 0) {
    return <NoRecipesFound />;
  }

  return (
    <div className="recipe-list mb3" id="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
