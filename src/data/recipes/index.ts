import { IRecipe } from "../../models/recipe.models"

const testRecipes: Array<IRecipe> = [
    {
        name: "Scrambled Tofu",
        categories: ["breakfast", "lunch"],
        cost: "cheap",
        image: "",
        shortDescription: "Yum yum",
        longDescription: "Yum yum yum yum yum",
        speed: "quick"
    },
    {
        name: "Butter Chicken",
        categories: ["dinner"],
        cost: "moderate",
        image: "",
        shortDescription: "Yum yum",
        longDescription: "Yum yum yum yum yum",
        speed: "medium"
    },
    {
        name: "Shepard's pie",
        categories: ["dinner"],
        cost: "cheap",
        image: "",
        shortDescription: "Yum yum",
        longDescription: "Yum yum yum yum yum",
        speed: "medium"
    },
]

export default testRecipes 