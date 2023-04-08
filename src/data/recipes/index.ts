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
        componentName: "Baked Tofu",
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
        componentName: "Mock-Chicken",
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
        componentName: "Naan Bread",
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
        componentName: "Butter Chicken",
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
  },
  {
    categories: ["dinner"],
    cost: 2,
    id: "chana-masala",
    image:
      "https://thepeskyvegan.com/wp-content/uploads/2020/04/chana-masala-rice-close-up-1.jpg",
    servings: 4,
    name: "Chana Masala",
    shortDescription: "Blah blah",
    longDescription: "Blah blah blah blah blah",
    time: 3,
    components: [
      {
        componentName: "The curry",
        ingredients: [
          {
            name: "Cooking oil",
            measurement: "tbsp",
            quantity: 1,
          },
          {
            name: "Onion",
            measurement: "unit",
            quantity: 2,
          },
          {
            name: "Minced Garlic",
            measurement: "tbsp",
            quantity: 2,
          },
          {
            name: "Ginger",
            measurement: "tbsp",
            quantity: 2,
          },
          {
            name: "Fresh Chillies",
            measurement: "unit",
            quantity: 1,
            isOptional: true,
          },
          {
            name: "Ground Cumin",
            measurement: "tsp",
            quantity: 2,
          },
          {
            name: "Ground Coriander",
            measurement: "tsp",
            quantity: 2,
          },
          {
            name: "Garam Masala",
            measurement: "tsp",
            quantity: 2,
          },
          {
            name: "Chilli Powder",
            measurement: "tsp",
            quantity: 1,
          },
          {
            name: "Tumeric",
            measurement: "tsp",
            quantity: 1,
          },
          {
            name: "Tomato Puree",
            measurement: "tbsp",
            quantity: 1,
          },
          {
            name: "Salt",
            measurement: "tsp",
            quantity: 1 / 2,
          },
          {
            name: "Chopped Tomatoes",
            measurement: "grams",
            quantity: 400,
          },
          {
            name: "Tinned Chickpeas",
            measurement: "grams",
            quantity: 400,
          },
          {
            name: "Water",
            measurement: "cups",
            quantity: 1 / 2,
          },
          {
            name: "Fresh Coriander",
            measurement: "cups",
            quantity: 1 / 4,
            isOptional: true,
          },
          {
            name: "Lemon Juice",
            measurement: "tbsp",
            quantity: 1,
            isOptional: true,
          },
        ],
        steps: [
          {
            text: "Heat the {Cooking Oil} in a large pot on medium heat.",
          },
          {
            text: "Add the {Onion} and stir occasionally for 6-8 minutes (or until soft and starting to golden)",
          },
          {
            text: "Add the {Minced Garlic}, {Ginger} and {Fresh Chillies} and cook for a couple of minutes.",
          },
          {
            text: "Once those have softened, add all the dried ground spices ({Ground Cumin}, {Ground Coriander}, {Garam Masala}, {Tumeric} and {Chilli Powder}) and mix well",
          },
          {
            text: "After a couple of minutes, stir in the {Tomato Puree}, {Chopped Tomatoes} and {Salt}. Cook for 5 minutes to allow the ingredients to blend together.",
          },
          {
            text: "At this point, you have the option to thicken the curry and make it a little smoother. Pulse a few times using a hand blender, or mash through the sauce using a potato masher.",
          },
          {
            text: "Add in the drained chickpeas along with the {Water}. Stir well and cook for 10-15 minutes. If you want to loosen the sauce, add a little more water.",
            image:
              "https://thepeskyvegan.com/wp-content/uploads/2020/04/chana-masala-cooking.jpg",
          },
          {
            text: "After 10-15 minutes, add the lemon juice, stir in the freshly chopped coriander, adjust the seasoning, and serve with boiled rice.",
          },
        ],
      },
      {
        componentName: "Naan Bread",
        ingredients: [
          {
            name: "Instant Yeast",
            quantity: 1,
            measurement: "tsp",
          },
          {
            name: "Warm Water",
            quantity: 3 / 4,
            measurement: "cups",
          },
          {
            name: "Granulated Sugar",
            quantity: 1,
            measurement: "tsp",
          },
          {
            name: "All Purpose Flour",
            quantity: 2,
            measurement: "cups",
          },
          {
            name: "Salt",
            quantity: 1,
            measurement: "tsp",
          },
          {
            name: "Baking Powder",
            quantity: 3 / 4,
            measurement: "tsp",
          },
          {
            name: "Coconut Cream",
            quantity: 3,
            measurement: "tbsp",
            isOptional: true,
          },
          {
            name: "Olive Oil",
            quantity: 2,
            measurement: "tbsp",
          },
          {
            name: "Vegan Butter",
            isOptional: true,
          },
        ],
        steps: [
          {
            text: "Add the {Instant Yeast} and {Granulated Sugar} to a large bowl and pour the {Warm Water} on top (not too hot or it will kill the yeast). Let sit for a few minutes until it is frothy on top.",
          },
          {
            text: "Now add the {All Purpose Flour}, {Salt}, {Baking Powder}, {Coconut Cream} and {Olive Oil}. Stir with a wooden spoon until it becomes difficult, then turn the ball of dough out on a lightly floured surface (I just use my countertop). Knead the ball of dough for about 2-3 minutes, until the ball of dough is smooth and soft. If it is too sticky, add a little more flour.",
          },
          {
            text: "Place the dough in a large bowl, cover with a tea towel and let it rise for about 30 minutes.",
            image:
              "https://www.noracooks.com/wp-content/uploads/2020/03/collage-1.jpg",
          },
          {
            text: "Heat a large, heavy bottomed pan (cast iron preferred) over medium heat. Take a piece of the dough and roll it on a lightly floured surface into a circle or oval shape (about 1/4 inch thick).",
          },
          {
            text: "Place the dough on the heated pan and cook until large bubbles have formed and the bottom is golden brown. Flip and cook 1-2 minutes more until that side is golden brown as well.",
            image:
              "https://www.noracooks.com/wp-content/uploads/2018/07/IMG_9001.jpg",
          },
          {
            text: "Repeat with the remaining pieces. Cover the naan with a towel or wrapped in foil to keep warm until ready to serve. Serve plain or brush with melted {Vegan Butter} and sprinkle with fresh herbs, such as cilantro or parsley.",
            image:
              "https://www.noracooks.com/wp-content/uploads/2018/07/IMG_9025.jpg",
          },
        ],
      },
    ],
  },
];

export default testRecipes;
