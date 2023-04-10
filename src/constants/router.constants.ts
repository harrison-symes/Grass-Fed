export const BASE_PATH = "/Grass-Fed";

export enum ROUTES_INTERNAL {
  HOME = "/",
  LOGIN = "/login",
  SIGNUP = "/signup",
  RECIPES = "/recipes",
  RECIPE = "/recipes/:id",
  PODCASTS = "/podcasts",
  VIDEOS = "/videos",
  GO_VEGAN = "/go-vegan",
  ABOUT = "/about",
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
