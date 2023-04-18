import { IRecipe } from "../../models/recipe.models";

export default {
  id: "butter-chicken",
  name: "Butter Chicken",
  categories: ["dinner"],
  cost: 3,
  rating: 5,
  image:
    "https://cdn.pickuplimes.com/cache/25/ad/25ade721bce05451beef337257d2218f.jpg",
  shortDescription:
    "Indulge in the rich and creamy flavors of this vegan butter chicken recipe, served with warm and fluffy homemade naan bread. Marinated tofu (Or any protein you choose) is simmered in a fragrant tomato-based sauce infused with traditional Indian spices, coconut milk, and creamy cashews. Paired with a fresh and fluffy naan bread made from scratch, this comforting and satisfying meal is sure to become a favorite for vegans and non-vegans alike.",
  time: 3,
  servings: 4,
  components: [
    {
      componentName: "Baked Tofu",
      note: "You may prefer to use whatever mock-chicken is available to you. I recommend Sunfed Chicken for this recipe.",
      ingredients: [
        {
          name: "Firm Tofu",
          quantity: 450,
          measurement: "grams",
        },
        {
          name: "Garam Masala",
          quantity: 2,
          measurement: "tsp",
        },
        {
          name: "Ground Cumin",
          quantity: 1,
          measurement: "tsp",
        },
        {
          name: "Ground Coriander",
          quantity: 1,
          measurement: "tsp",
        },
        {
          name: "Ground Tumeric",
          quantity: 1 / 2,
          measurement: "tsp",
        },
        {
          name: "Salt",
          quantity: 1 / 2,
          measurement: "tsp",
        },
      ],
      steps: [
        {
          text: "Cut the {Firm Tofu} in 1cm cubes. Preheat the oven to 205°C",
        },
        {
          text: "In a bowl, combine the {Firm Tofu} cubes, {Garam Masala}, {Ground Cumin}, {Ground Coriander}, {Turmeric}, and {Salt}.",
        },
        {
          text: "Transfer the tofu to a lined baking tray and bake for 15 - 20 minutes, stirring once or twice. Keep an eye on it to prevent burning.",
        },
        {
          text: "Once the tofu is golden, remove it from the oven",
        },
      ],
    },
    {
      componentName: "Butter Chicken Sauce",
      ingredients: [
        {
          name: "Raw Cashews",
          quantity: 1 / 4,
          measurement: "cups",
        },
        {
          name: "Cooking Oil",
          quantity: 1,
          measurement: "tbsp",
        },
        {
          name: "Minced Garlic",
          quantity: 1,
          measurement: "tbsp",
        },
        {
          name: "Onion",
          quantity: 1,
          measurement: "unit",
        },
        {
          name: "Ginger",
          quantity: 2,
          measurement: "tsp",
        },
        {
          name: "Garam Masala",
          quantity: 1.5,
          measurement: "tbsp",
        },
        {
          name: "Ground Coriander",
          quantity: 1.5,
          measurement: "tbsp",
        },
        {
          name: "Ground Cumin",
          quantity: 1.5,
          measurement: "tbsp",
        },
        {
          name: "Salt",
          quantity: 1,
          measurement: "tsp",
        },
        {
          name: "Cayenne Pepper",
          quantity: 1 / 4,
          measurement: "tsp",
          isOptional: true,
        },
        {
          name: "Diced Tomatoes",
          quantity: 400,
          measurement: "grams",
        },
        {
          name: "Tomato Paste",
          quantity: 1 / 4,
          measurement: "cups",
        },
        {
          name: "Agave Syrup",
          quantity: 1 / 2,
          measurement: "tbsp",
          isOptional: true,
        },
        {
          name: "Coconut Milk",
          quantity: 400,
          measurement: "ml",
        },
      ],
      steps: [
        {
          text: "Soak the {Raw Cashews} in boiling water to soften. Set aside for 10 minutes.",
        },
        {
          text: "To a large pot on medium-high heat, sauté the {Cooking Oil}, {Minced Garlic}, {Onion}, and {Ginger} for 5 minutes. Add splashes of water as needed to deglaze the pan.",
        },
        {
          text: "Add in the {Garam Masala}, {Ground Coriander}, {Ground Cumin}, {Salt}, and {Cayenne Pepper} and cook for 1 more minute, stirring throughout to toast the spices",
        },
        {
          text: "Then add the drained cashews, {Diced Tomatoes}, {Tomato Paste}, {Agave Syrup}, and {Coconut Milk}",
        },
        {
          text: "Blend everything using an immersion blender or transfer to a standing blender to blend until smooth. Let simmer on low, and cover with a lid.",
        },
        {
          text: "Once the cooked through, add the Tofu / Mock Meat to the pot. Give it a gentle stir.",
        },
        {
          text: "Serve with naan or rice. Enjoy!",
        },
      ],
    },
    {
      componentName: "Naan Bread",
      note: "You may prefer to buy some Vegan Naan instead of making your own, but I promise it is easier than it looks! 1 Serving = 2 small naan.",
      ingredients: [
        {
          name: "Instant Yeast",
          quantity: 1,
          measurement: "tsp",
        },
        {
          name: "Warm Water",
          notes:
            "Think 'bath temperature'. If it is too hot it will kill the yeast",
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
