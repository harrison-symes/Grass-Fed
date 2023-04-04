import { createSelector } from "@reduxjs/toolkit";
import { TStoreState } from "../reducers";
import { getPageNumber, getQueryParam } from "./router.selectors";
import { QUERY_PARAMS } from "../constants/router.constants";
import { MAX_COST_VALUE, MAX_TIME_VALUE, MIN_COST_VALUE, MIN_TIME_VALUE, RECIPES_PER_PAGE } from "../constants/recipe.constants";

export const getRecipes = (state: TStoreState) => state.recipes.recipes

export const getTimeParam = createSelector(getQueryParam(QUERY_PARAMS.TIME_TO_PREPARE), (time): number | null => {
    const numberValue = parseInt(time ?? "")

    if (isNaN(numberValue) || numberValue < MIN_TIME_VALUE || numberValue > MAX_TIME_VALUE)
    {
        return null;
    }

    return numberValue;
})

export const getCostParam = createSelector(getQueryParam(QUERY_PARAMS.PRICE), (price): number | null => {
    const numberValue = parseInt(price ?? "")

    if (isNaN(numberValue) || numberValue < MIN_COST_VALUE || numberValue > MAX_COST_VALUE)
    {
        return null;
    }

    return numberValue;
})

export const getCategoryParams = createSelector(getQueryParam(QUERY_PARAMS.CATEGORY), (param): string[] => {
    if (param == null) {
        return []
    }

    return param.split(",")
})

export const getFilteredRecipes = createSelector(
    getRecipes,
    getCategoryParams,
    getQueryParam(QUERY_PARAMS.SEARCH),
    getCostParam,
    getTimeParam,
    (recipes, categories, search, price, time) => {
        const filteredRecipes = recipes.filter(recipe => {
            if (categories.length !== 0 && recipe.categories.findIndex(cat => categories.includes(cat)) === -1) return false;
            if (search != null && !recipe.name.includes(search)) return false;
            if (price != null && recipe.cost >= price) return false;
            if (time != null && recipe.time >= time) return false;

            return true
        })

        return filteredRecipes
    }
)

export const getTotalRecipeCount = createSelector(
    getFilteredRecipes,
    (recipeList) => recipeList.length
)

export const getRecipesPerPage = () => RECIPES_PER_PAGE

export const getTotalRecipePages = createSelector(
    getTotalRecipeCount,
    getRecipesPerPage,
    (recipesCount, recipesperPage) => {
        return Math.ceil(recipesCount / recipesperPage)
    }
)

export const getRecipesForPAge = createSelector(
    getFilteredRecipes,
    getPageNumber,
    getRecipesPerPage,
    (recipeList, pageNumber, recipesPerPage) => {
        const start = (pageNumber - 1) * recipesPerPage
        const end = pageNumber * recipesPerPage

        return recipeList.slice(start, end)
    }
)