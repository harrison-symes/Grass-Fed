import { createSelector } from "@reduxjs/toolkit";
import { TStoreState } from "../reducers";
import { getPageNumber, getQueryParam } from "./router.selectors";
import { QUERY_PARAMS } from "../constants/router.constants";
import {
  DEFAULT_RATING_VALUE,
  MAX_COST_VALUE,
  MAX_RATING_VALUE,
  MAX_TIME_VALUE,
  MIN_COST_VALUE,
  MIN_RATING_VALUE,
  MIN_TIME_VALUE,
  RECIPES_PER_PAGE,
} from "../constants/recipe.constants";
import { RecipeTabType } from "../components/Recipe/RecipeTabs";

export const getRecipes = (state: TStoreState) => state.recipes.recipes;

export const getTimeParam = createSelector(
  getQueryParam(QUERY_PARAMS.TIME_TO_PREPARE),
  (time): number => {
    const numberValue = parseInt(time ?? "");

    if (
      isNaN(numberValue) ||
      numberValue < MIN_TIME_VALUE ||
      numberValue > MAX_TIME_VALUE
    ) {
      return MAX_TIME_VALUE;
    }

    return numberValue;
  }
);

export const getRatingParam = createSelector(
  getQueryParam(QUERY_PARAMS.RATING),
  (rating): number => {
    const numberValue = parseInt(rating ?? "");

    if (
      isNaN(numberValue) ||
      numberValue < MIN_RATING_VALUE ||
      numberValue > MAX_RATING_VALUE
    ) {
      return DEFAULT_RATING_VALUE;
    }

    return numberValue;
  }
);

export const getCostParam = createSelector(
  getQueryParam(QUERY_PARAMS.PRICE),
  (price): number => {
    const numberValue = parseInt(price ?? "");

    if (
      isNaN(numberValue) ||
      numberValue < MIN_COST_VALUE ||
      numberValue > MAX_COST_VALUE
    ) {
      return MAX_COST_VALUE;
    }

    return numberValue;
  }
);

export const getCategoryParams = createSelector(
  getQueryParam(QUERY_PARAMS.CATEGORY),
  (param): string[] => {
    if (param == null) {
      return [];
    }

    return param.split(",");
  }
);

export const getIngredientParams = createSelector(
  getQueryParam(QUERY_PARAMS.INGREDIENTS),
  (param): string[] => {
    if (param == null) {
      return [];
    }

    return param.split(",");
  }
);

export const getRecipeTabParam = createSelector(
  getQueryParam(QUERY_PARAMS.TAB),
  (param): RecipeTabType => {
    if (param == null) {
      return null;
    }

    return param as RecipeTabType;
  }
);

export const getFilteredRecipes = createSelector(
  getRecipes,
  getCategoryParams,
  getIngredientParams,
  getQueryParam(QUERY_PARAMS.SEARCH),
  getCostParam,
  getTimeParam,
  getRatingParam,
  (recipes, categories, ingredients, search, price, time, rating) => {
    const filteredRecipes = recipes.filter((recipe) => {
      if (
        categories.length !== 0 &&
        recipe.categories.findIndex((cat) => categories.includes(cat)) === -1
      )
        return false;
      if (
        ingredients.length !== 0 &&
        ingredients.filter((ingredient) =>
          recipe.components.find((comp) =>
            comp.ingredients?.find((ing) => ing.name === ingredient)
          )
        ).length < ingredients.length
      )
        return false;
      if (
        search != null &&
        !recipe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
        return false;
      if (price != null && recipe.cost >= price) return false;
      if (time != null && recipe.time >= time) return false;
      if (rating != null && recipe.rating < rating) return false;

      return true;
    });

    return filteredRecipes.sort((a, b) => {
      if (a.rating > b.rating) return -1;
      if (a.rating < b.rating) return 1;
      if (a.cost > b.cost) return 1;
      if (a.cost < b.cost) return -1;
      if (a.time > b.time) return 1;
      if (a.time < b.time) return -1;
      return 0;
    });
  }
);

export const getTotalRecipeCount = createSelector(
  getFilteredRecipes,
  (recipeList) => recipeList.length
);

export const getRecipesPerPage = () => RECIPES_PER_PAGE;

export const getTotalRecipePages = createSelector(
  getTotalRecipeCount,
  getRecipesPerPage,
  (recipesCount, recipesperPage) => {
    return Math.ceil(recipesCount / recipesperPage);
  }
);

export const getRecipesForPage = createSelector(
  getFilteredRecipes,
  getPageNumber,
  getRecipesPerPage,
  (recipeList, pageNumber, recipesPerPage) => {
    const start = (pageNumber - 1) * recipesPerPage;
    const end = pageNumber * recipesPerPage;

    return recipeList.slice(start, end);
  }
);

export const getRecipeIdFromUrl = (state: TStoreState) => {
  const path = state.router?.location?.pathname;
  if (path == null || !path.startsWith("/recipes/")) {
    return null;
  }

  const recipeId = path.split("/")[2];

  console.log({ recipeId });

  if (!recipeId) {
    return null;
  }

  return recipeId;
};

export const getRecipeByUrl = createSelector(
  getRecipes,
  getRecipeIdFromUrl,
  (recipes, id) => recipes.find((recipe) => recipe.id === id)
);

export const getServingsValue = createSelector(
  getQueryParam(QUERY_PARAMS.SERVINGS),
  getRecipeByUrl,
  (servingsParam, recipe): number => {
    const servings = Number(servingsParam ?? "");
    console.log({ servingsParam, servings, recipe });
    if (recipe == null) {
      return 1;
    }
    if (isNaN(servings) || servings === 0) {
      return recipe.servings;
    }

    return servings;
  }
);
