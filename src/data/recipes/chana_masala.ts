import { IRecipe } from "../../models/recipe.models";

export default {
  categories: ["dinner"],
  cost: 2,
  id: "chana-masala",
  image:
    "https://thepeskyvegan.com/wp-content/uploads/2020/04/chana-masala-rice-close-up-1.jpg",
  servings: 4,
  name: "Chana Masala",
  shortDescription:
    "This delicious vegan chana masala recipe is bursting with flavor and loaded with protein-rich chickpeas. Simmered in a fragrant blend of spices, tomatoes, and coconut milk, this hearty Indian-inspired dish is perfect for a cozy weeknight dinner. Serve over rice or with naan bread for a satisfying and flavorful meal that's both healthy and delicious.",
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
} as IRecipe;
