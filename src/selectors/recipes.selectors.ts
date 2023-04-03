import { createSelector } from "@reduxjs/toolkit";
import { TStoreState } from "../reducers";
import { getQueryParam } from "./router.selectors";
import { QUERY_PARAMS } from "../constants/router.constants";

export const getRecipes = (state: TStoreState) => state.recipes.recipes

export const getFilteredRecipes = createSelector(
    getRecipes,
    getQueryParam(QUERY_PARAMS.CATEGORY),
    getQueryParam(QUERY_PARAMS.SEARCH),
    (recipes, category, search) => {
        const filterSearch = search ? recipes.filter(recipe => recipe.name.includes(search)) : recipes
        const filterCategory = category ? filterSearch.filter(recipe => recipe.categories.find(cat => cat === category)) : filterSearch
        
        return filterCategory
    }
)