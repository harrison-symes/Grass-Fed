import { IRecipe } from "../../models/recipe.models";

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
    components: [
      {
        groupName: "The Scramble",
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
        groupName: "Cashew Sauce",
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
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    categories: ["dinner"],
    cost: 3,
    image:
      "https://cdn.pickuplimes.com/cache/25/ad/25ade721bce05451beef337257d2218f.jpg",
    shortDescription: "Yum yum",
    longDescription: "Yum yum yum yum yum",
    time: 3,
    servings: 3,
    components: [
      {
        groupName: "Baked Tofu",
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
        groupName: "Mock-Chicken",
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
        groupName: "Naan Bread",
        recipeId: "naan-bread",
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
        groupName: "Butter Chicken",
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
  },
  {
    id: "shepherds-pie",
    name: "Shepherd's pie",
    categories: ["dinner"],
    cost: 2,
    image:
      "https://rainbowplantlife.com/wp-content/uploads/2020/11/137_image-asset-500x500.jpg",
    shortDescription: "Yum yum",
    longDescription: "Yum yum yum yum yum",
    time: 2,
    servings: 3,
    components: [
      {
        groupName: "Mashed potato",
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
        groupName: "Pie Filling",
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
  },
];

export default testRecipes;
