export type IRecipeCategory =
    "breakfast" | "lunch" | "dinner" | "baking" | "dessert" | "snack"

export type IRecipeTime = "quick" | "medium" | "long"

export type IRecipePrice = "cheap" | "moderate" | "pricey" | "luxury"

export interface IRecipe {
    id: string;
    name: string;
    categories: Array<IRecipeCategory>;
    image: string;
    shortDescription: string;
    longDescription?: string;
    time: IRecipeTime;
    cost: IRecipePrice
}