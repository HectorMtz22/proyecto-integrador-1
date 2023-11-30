import { Recipe } from "@/types";

const URL = process.env.NEXT_PUBLIC_API_URI;

// const MOCK_RECIPES: Recipe[] = [
//   {
//     dish: "string",
//     id: 0,
//     ingredients: [
//       {
//         group_id: 0,
//         existence: 0,
//         id: 0,
//         name: "string",
//         unit: "string",
//       },
//     ],
//     count: 3,
//   },
// ];
export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(`${URL}/Recipe`, {
    cache: "no-store",
  });
  const data: Recipe[] = await response.json();
  // if (data.length === 0) return MOCK_RECIPES;
  return data.map((recipe) => ({
    ...recipe,
    count: recipe.ingredients.length,
  }));
};

export const postRecipe = async (recipe: Recipe) => {
  return await fetch(`${URL}/Recipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
};
