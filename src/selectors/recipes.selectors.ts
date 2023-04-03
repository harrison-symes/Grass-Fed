import { createSelector } from "@reduxjs/toolkit";
import { TStoreState } from "../reducers";
import { getQueryParam } from "./router.selectors";
import { QUERY_PARAMS } from "../constants/router.constants";

export const getRecipes = (state: TStoreState) => state.recipes.recipes

export const getFilteredRecipes = createSelector(
    getRecipes,
    getQueryParam(QUERY_PARAMS.CATEGORY),
    getQueryParam(QUERY_PARAMS.SEARCH),
    getQueryParam(QUERY_PARAMS.PRICE),
    getQueryParam(QUERY_PARAMS.TIME_TO_PREPARE),
    (recipes, category, search, price, time) => {
        const filteredRecipes = recipes.filter(recipe => {
            if (category != null && recipe.categories.findIndex(cat => cat === category) === -1) return false;
            if (search != null && !recipe.name.includes(search)) return false;
            if (price != null && recipe.cost !== price) return false;
            if (time != null && recipe.time !== time) return false;

            return true
        })

        return filteredRecipes
    }
)