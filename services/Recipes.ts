const URL = process.env.NEXT_PUBLIC_API_URI;

const MOCK_RECIPES = [
  {
    dish: "string",
    id: 0,
    ingredients: [
      {
        amount: 0,
        id: 0,
        name: "string",
        unit: "string",
      },
    ],
  },
];
export const getRecipes = async () => {
  const response = await fetch(`${URL}/Recipe`, {
    cache: "no-store",
  });
  const data: [] = await response.json();
  if (data.length === 0) return MOCK_RECIPES;
  return data;
};
