import * as React from "react";
import SearchInput from "../components/Inputs/Search";
import RecipeFilters from "../components/RecipeFilters/RecipeFilters";
import RecipeList from "../components/Recipes/RecipeList";

const Recipes = () => {
  return (
    <div className="container">
      <h1 className="is-size-1">Recipes</h1>
      <RecipeFilters />
      <RecipeList />
    </div>
  );
};

export default Recipes;
