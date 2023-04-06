export const BASE_PATH = "/Grass-Fed";

export enum ROUTES_INTERNAL {
  HOME = "/",
  RECIPES = "/recipes",
  RECIPE = "/recipes/:id",
  PODCASTS = "/podcasts",
  VIDEOS = "/videos",
  GO_VEGAN = "/go-vegan",
}

export enum QUERY_PARAMS {
  CATEGORY = "category",
  SEARCH = "search",
  PRICE = "price",
  TIME_TO_PREPARE = "time",
  PAGE_NUMER = "page",
  TAB = "tab",
  SERVINGS = "servings",
}
