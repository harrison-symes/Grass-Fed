import { IRecipeIngredient, IngredientMeasurement } from "../../models/recipe.models";

export const speedText = (speed: number | null) => {
    switch(speed)
    {
        case 1: return "Up to: Instant";
        case 2: return "Up to: Fast";
        case 3: return "Up to: Medium";
        case 4: return "Up to: Slow";
        case 5: return "Up to: Long";
        default: return "Time to prepare";
    }
}

export const costText = (cost: number | null) => {
    switch(cost)
    {
        case 1: return "Up to: Very Cheap";
        case 2: return "Up to: Cheap";
        case 3: return "Up to: Moderate";
        case 4: return "Up to: Pricey";
        case 5: return "Up to: Luxury";
        default: return "Cost";
    }
}

export const quantityValueText = (value: number) => {
    switch (value) {
        case 0.0875: return "1/16";
        case 0.125: return "1/8";
        case 0.33: return "1/3";
        case 0.25: return "1/4";
        case 0.5: return "1/2";
        case 0.66: return "2/3";
        case 0.75: return "3/4";
        default: return value
    }
}

export const measurementName = (ingredient: IRecipeIngredient) => {
    switch(ingredient.measurement)
    {
        case "cups": return ingredient.quantity <= 1 ? "cup" : "cups";
        case "unit": return ingredient.quantity <= 1 ? "unit" : "units";
        default: return ingredient.measurement
    }
}

export const quantityText = (ingredient: IRecipeIngredient) => {
    return `${quantityValueText(ingredient.quantity)} ${measurementName(ingredient)}`
}