import { IRecipe } from "../../models/recipe.models";

export default {
  id: "shepherds-pie",
  name: "Shepherd's pie",
  categories: ["dinner"],
  cost: 2,
  image:
    "https://rainbowplantlife.com/wp-content/uploads/2020/11/137_image-asset-500x500.jpg",
  shortDescription:
    "This hearty and comforting vegan shepherd's pie is the perfect meal for a chilly evening. Loaded with a colorful array of veggies like carrots, peas, and corn, this dish is layered with a savory and protein-packed lentil and vegetable filling. Topped with a creamy and flavorful mashed potato crust, this vegan version of a classic dish is the ultimate in plant-based comfort food. Whether you're a vegan or simply looking to eat more veggies, this recipe is sure to satisfy your craving for a warm and satisfying meal.",
  time: 2,
  servings: 3,
  components: [
    {
      componentName: "Mashed potato",
      ingredients: [],
      steps: [
        {
          text: "Step 1",
        },
        {
          text: "Step 2",
        },
        {
          text: "Step 3",
        },
        {
          text: "Step 4",
        },
      ],
    },
    {
      componentName: "Pie Filling",
      ingredients: [],
      steps: [
        {
          text: "Step 1",
        },
        {
          text: "Step 2",
        },
        {
          text: "Step 3",
        },
        {
          text: "Step 4",
        },
      ],
    },
  ],
} as IRecipe;
