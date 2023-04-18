export type IRecipeCategory =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "baking"
  | "dessert"
  | "snack";

export interface IRecipe {
  id: string;
  name: string;
  categories: Array<IRecipeCategory>;
  image: string;
  shortDescription: string;
  longDescription?: string;
  rating: number;
  time: number;
  cost: number;
  components: Array<IRecipeComponent>;
  servings: number;
}

export type IngredientMeasurement =
  | "unit"
  | "grams"
  | "cups"
  | "tsp"
  | "tbsp"
  | "ml"
  | "l";

export interface IRecipeIngredient {
  name: string;
  quantity?: number;
  measurement?: IngredientMeasurement;
  isOptional?: boolean;
  notes?: string;
}

export interface IRecipeStep {
  image?: string;
  text: string;
}

export interface IRecipeComponent {
  componentName: string;
  note?: string;
  recipeId?: string;
  ingredients?: IRecipeIngredient[];
  steps: IRecipeStep[];
}
