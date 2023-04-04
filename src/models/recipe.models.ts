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
}