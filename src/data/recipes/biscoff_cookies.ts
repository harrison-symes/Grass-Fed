import { IRecipe } from "../../models/recipe.models";

export default {
  id: "biscoff_cookies",
  name: "Biscoff Stuffed Cookies",
  categories: ["baking", "snack", "dessert"],
  cost: 2,
  time: 3,
  servings: 8,
  shortDescription:
    "These cookies are simple, delicious and very easy to make. My non-vegan friends love them!",
  rating: 4,
  image:
    "https://sweetmouthjoy.com/wp-content/uploads/2021/02/Easy-Biscoff-Stuffed-Vegan-Cookies-without-Weird-Ingredients-1-1.jpg",
  components: [
    {
      componentName: "Biscoff Stuffed Cookies",
      ingredients: [
        {
          name: "Biscoff Spread",
          measurement: "tsp",
          quantity: 8,
        },
        {
          name: "Vegan Butter",
          measurement: "cups",
          quantity: 1 / 4,
        },
        {
          name: "Brown Sugar",
          measurement: "cups",
          quantity: 1 / 2,
        },
        {
          name: "Vanilla Extract",
          measurement: "tsp",
          quantity: 1,
        },
        {
          name: "Oat Milk",
          measurement: "tbsp",
          quantity: 1,
        },
        {
          name: "All Purpose Flour",
          measurement: "cups",
          quantity: 3 / 4,
        },
        {
          name: "Baking Powder",
          measurement: "tsp",
          quantity: 1 / 2,
        },
      ],
      steps: [
        {
          text: "Using a teaspoon, scoop a dollop of Biscoff Spread onto a piece of baking paper in a freezable container. Repeat until you have 1 for each cookie you are making, leaving a small gap between each. Freeze for 30mins before starting on the cookie dough.",
        },
        {
          text: "Preheat oven: 180°C / 160°C (fan)",
        },
        {
          text: "Beat together the {Vegan Butter} and {Brown Sugar} until fluffy, then stir in the {Vanilla Extract} and {Oat Milk}.",
        },
        {
          text: "Sift in the {All Purpose Flour} and {Baking Powder}, and mix together until a smooth dough forms, then divide the dough into even balls (1 for each cookie).",
        },
        {
          text: "Take the frozen biscoff spread from the freezer and flatten one dough ball before pressing one frozen scoop of spread into the middle, closing the dough around the spread to cover it completely, smoothing it into a ball. Repeaat this for each cookie.",
        },
        {
          text: "Bake on a lined tray spaced evenly apart for 10-12mins.",
        },
        {
          text: "That's it! Enjoy!",
        },
      ],
    },
  ],
} as IRecipe;
