import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IRecipe } from "../models/recipe.models";
import testRecipes from "../data/recipes";

export interface IRecipeState {
  recipes: Array<IRecipe>;
}

export const recipeInitialState: IRecipeState = {
  recipes: testRecipes,
};

export const recipesReducer = reducerWithInitialState(recipeInitialState);
// .case(setName, setNameHandler)
