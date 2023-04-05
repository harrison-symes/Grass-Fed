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
        time: 1,
        servings: 2,
        steps: [
            {
                groupName: "The Scramble",
                ingredients: [
                    {
                        name: "Smoked Paprika",
                        quantity: 1,
                        measurement: "tbsp"
                    },
                    {
                        name: "Cumin",
                        quantity: 2,
                        measurement: "tbsp"
                    },
                    {
                        name: "Tumeric",
                        quantity: 0.5,
                        measurement: "tbsp"
                    },
                    {
                        name: "Firm Tofu",
                        quantity: 150,
                        measurement: "grams"
                    },
                    {
                        name: "Onion",
                        quantity: 0.5,
                        measurement: "unit"
                    },
                    {
                        name: "White Button Mushroom",
                        quantity: 2,
                        measurement: "unit"
                    },
                    {
                        name: "Capsicum",
                        quantity: 0.5,
                        measurement: "unit"
                    },
                ],
            },
            {
                groupName: "Cashew Sauce",
                recipeId: "cashew-sauce",
                ingredients: [
                    {
                        name: "Raw Cashews",
                        quantity: 0.5,
                        measurement: "cups"
                    },
                    {
                        name: "Onion Powder",
                        quantity: 0.5,
                        measurement: "tbsp"
                    },
                    {
                        name: "Garlic Powder",
                        quantity: 0.5,
                        measurement: "tbsp"
                    },
                ]
            }
        ]
    },
    {
        id: "butter-chicken",
        name: "Butter Chicken",
        categories: ["dinner"],
        cost: 3,
        image: "https://cdn.pickuplimes.com/cache/25/ad/25ade721bce05451beef337257d2218f.jpg",
        shortDescription: "Yum yum",
        longDescription: "Yum yum yum yum yum",
        time: 3,
        servings: 3,
        steps: [
            {
                groupName: "Baked Tofu",
                ingredients: []
            },
            {
                groupName: "Mock-Chicken",
                ingredients: []
            },
            {
                groupName: "Naan Bread",
                recipeId: "naan-bread",
            },
            {
                groupName: "Butter Chicken",
                ingredients: []
            },
        ]
    },
    {
        id: "shepherds-pie",
        name: "Shepherd's pie",
        categories: ["dinner"],
        cost: 2,
        image: "https://rainbowplantlife.com/wp-content/uploads/2020/11/137_image-asset-500x500.jpg",
        shortDescription: "Yum yum",
        longDescription: "Yum yum yum yum yum",
        time: 2,
        servings: 3,
        steps: [
            {
                groupName: "Mashed potato",
                ingredients: []
            },
            {
                groupName: "Pie Filling",
                ingredients: []
            }
        ]
    },
]

export default testRecipes 