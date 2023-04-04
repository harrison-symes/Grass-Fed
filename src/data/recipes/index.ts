import { IRecipe } from "../../models/recipe.models"

const testRecipes: Array<IRecipe> = [
    {
        id: "scrambled-tofu",
        name: "Scrambled Tofu",
        categories: ["breakfast", "lunch"],
        cost: 2,
        image: "https://www.noracooks.com/wp-content/uploads/2019/01/IMG_2907.jpg",
        shortDescription: "Yum yum",
        longDescription: "Yum yum yum yum yum",
        time: 1
    },
    {
        id: "butter-chicken",
        name: "Butter Chicken",
        categories: ["dinner"],
        cost: 3,
        image: "https://cdn.pickuplimes.com/cache/25/ad/25ade721bce05451beef337257d2218f.jpg",
        shortDescription: "Yum yum",
        longDescription: "Yum yum yum yum yum",
        time: 3
    },
    {
        id: "shepherds-pie",
        name: "Shepherd's pie",
        categories: ["dinner"],
        cost: 2,
        image: "https://rainbowplantlife.com/wp-content/uploads/2020/11/137_image-asset-500x500.jpg",
        shortDescription: "Yum yum",
        longDescription: "Yum yum yum yum yum",
        time: 2
    },
]

export default testRecipes 