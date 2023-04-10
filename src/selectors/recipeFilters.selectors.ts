import { createSelector } from "@reduxjs/toolkit";
import { getRecipes } from "./recipes.selectors";

export const getRepeatIngredients = createSelector(getRecipes, (recipes) => {
  const counts = recipes.reduce((accum, recipe) => {
    recipe.components.forEach((component) =>
      component.ingredients?.forEach((ingredient) => {
        if (accum[ingredient.name] == null) {
          accum[ingredient.name] = 1;
        } else {
          accum[ingredient.name] = accum[ingredient.name] + 1;
        }
      })
    );

    return accum;
  }, {} as Record<string, number>);

  const repeatIngredients = Object.keys(counts).filter(
    (ingredient) => counts[ingredient] > 1
  );

  return repeatIngredients.sort((a, b) => {
    const aFirstWord = a.split(" ")[0];
    const bFirstWord = b.split(" ")[0];
    if (aFirstWord < bFirstWord) return -1;
    if (aFirstWord > bFirstWord) return 1;
    return 0;
  });
});
