import { IRecipePrice } from "../../models/recipe.models"

export const speedText = (speed: number | null) => {
    switch(speed)
    {
        case 1: return "Quick";
        case 2: return "Speedy";
        case 3: return "Medium";
        case 4: return "Takes some time";
        case 5: return "Takes a long time";
        default: return "Time to prepare";
    }
}

export const costText = (cost: IRecipePrice) => {
    switch(cost)
    {
        case "cheap": return "Cheap";
        case "moderate": return "Reasonable";
        case "pricey": return "A bit spenny";
        case "luxury": return "Very pricey";
        default: return;
    }
}