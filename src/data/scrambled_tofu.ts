import { IRecipe } from "../models/recipe.models";

export default {
  id: "scrambled-tofu",
  name: "Scrambled Tofu",
  categories: ["breakfast", "lunch"],
  cost: 2,
  image: "https://www.noracooks.com/wp-content/uploads/2019/01/IMG_2907.jpg",
  shortDescription:
    "This savory tofu scramble with creamy cashew sauce is a hearty vegan breakfast that's sure to satisfy. Crumbled tofu is seasoned with a blend of spices, sautéed with veggies, and topped with a rich and nutty cashew sauce. Served with crispy toast, this easy and flavorful dish is perfect for lazy weekend mornings or a quick and healthy breakfast any day of the week.",
  time: 1,
  servings: 2,
  components: [
    {
      componentName: "The Scramble",
      ingredients: [
        {
          name: "Smoked Paprika",
          quantity: 1,
          measurement: "tbsp",
        },
        {
          name: "Cumin",
          quantity: 2,
          measurement: "tbsp",
        },
        {
          name: "Tumeric",
          quantity: 0.5,
          measurement: "tbsp",
        },
        {
          name: "Firm Tofu",
          quantity: 150,
          measurement: "grams",
        },
        {
          name: "Onion",
          quantity: 0.5,
          measurement: "unit",
        },
        {
          name: "White Button Mushroom",
          quantity: 2,
          measurement: "unit",
        },
        {
          name: "Capsicum",
          quantity: 0.5,
          measurement: "unit",
        },
      ],
      steps: [
        {
          text: "Prepare your ingredients; Dice the {Onion} and {Capsicum}. Slice the {White Button Mushroom}.",
        },
        {
          text: "Heat up a pan to medium heat. Add your oil of choice and allow some time for the oil to heat",
        },
        {
          text: "Add the diced {Onion} to the pan. Stir frequently until it goes transparent.",
          image:
            "https://www.noracooks.com/wp-content/uploads/2019/01/IMG_2907.jpg",
        },
        {
          text: "Tear up the {Firm Tofu} with your hands and add it to the pan, make sure you stir frequently to avoid any Tofu sticking to the pan (You can add a splash of water to help prevent the sticking)",
        },
        {
          text: "Add the spices ({Smoked Paprika}, {Cumin} and {Tumeric}) to the pan, be sure to stir constantly. The Tofu should start looking yellow with a redish tinge.",
        },
        {
          text: "Add the {Capsicum} and {White Button Mushroom} to the pan. Stir for a couple of minutes until cooked through.",
        },
        {
          text: "Serve with Cashew Sauce and Toast. Enjoy!",
          image:
            "https://www.noracooks.com/wp-content/uploads/2019/01/IMG_2907.jpg",
        },
      ],
    },
    {
      componentName: "Cashew Sauce",
      recipeId: "cashew-sauce",
      ingredients: [
        {
          name: "Raw Cashews",
          quantity: 0.5,
          measurement: "cups",
        },
        {
          name: "Onion Powder",
          quantity: 0.5,
          measurement: "tbsp",
        },
        {
          name: "Garlic Powder",
          quantity: 0.5,
          measurement: "tbsp",
        },
        {
          name: "Soy Sauce",
          quantity: 1,
          measurement: "tbsp",
        },
        {
          name: "Water",
          quantity: 1 / 4,
          measurement: "cups",
        },
      ],
      steps: [
        {
          text: "Soak the {Raw Cashews} in boiling water for several minutes and then drain them. This will soften the cashews and helps to make the sauce creamier.",
        },
        {
          text: "Put the Cashews in a container that will allow you to blend them easily, such as the cup of a Nutribullet blender.",
        },
        {
          text: "Add the {Onion Powder}, {Garlic Powder}, {Soy Sauce} and {Water} to the container with the Cashews",
        },
        {
          text: "Blend the combined ingredients for about 20s. If the mixture is too thick you may need to add more water.",
        },
        {
          text: "Taste test the sauce. You may want to add more Soy Sauce or Salt if the flavour is not strong enough",
        },
        {
          text: "Serve with your Scrambled Tofu and Toast for a delicious meal. Enjoy!",
        },
      ],
    },
  ],
} as IRecipe;
