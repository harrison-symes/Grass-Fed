export type IRecipeCategory =
    "breakfast" | "lunch" | "dinner" | "baking" | "dessert" | "snack"

export interface IRecipe {
    id: string;
    name: string;
    categories: Array<IRecipeCategory>;
    image: string;
    shortDescription: string;
    longDescription?: string;
    time: number;
    cost: number;
    steps: IRecipeStep | Array<IRecipeStep>;
    servings: number;
}

export type IngredientMeasurement = "unit" | "grams" | "cups" | "tsp" | "tbsp" | "ml" | "l"

export interface IRecipeIngredient {
    name: string;
    quantity: number;
    measurement: IngredientMeasurement;
}

export interface IRecipeStep {
    groupName: string;
    recipeId?: string;
    ingredients?: IRecipeIngredient[];
}