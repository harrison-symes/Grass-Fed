export const BASE_PATH = "/Grass-Fed";

export enum ROUTES_INTERNAL {
  HOME = "/",
  LOGIN = "/login",
  SIGNUP = "/signup",
  RECIPES = "/recipes",
  RECIPE = "/recipes/:id",
  PODCASTS = "/podcasts",
  VIDEOS = "/videos",
  WHY_VEGAN = "/why-vegan",
  WHY_HEALTH = "/why-vegan/health",
  WHY_ENVIRONMENT = "/why-vegan/environment",
  WHY_ANIMALS = "/why-vegan/animals",
  GO_VEGAN = "/go-vegan",
  ABOUT = "/about",
}

export enum QUERY_PARAMS {
  CATEGORY = "category",
  INGREDIENTS = "ingredients",
  INGREDIENT_SEARCH = "ingredient_search",
  SEARCH = "search",
  PRICE = "price",
  TIME_TO_PREPARE = "time",
  RATING = "rating",
  PAGE_NUMER = "page",
  TAB = "tab",
  SERVINGS = "servings",
}
