import { IRecipePrice, IRecipeTime } from "../../models/recipe.models"

export const speedText = (speed: IRecipeTime) => {
    switch(speed)
    {
        case "long": return "Takes some time";
        case "medium": return "Medium";
        case "quick": return "Very quick";
        default: return;
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