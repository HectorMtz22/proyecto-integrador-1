import { Ingredient } from "@/types";

const URL = process.env.NEXT_PUBLIC_API_URI;
export const getIngredients = async () => {
  console.log(URL);
  return await fetch(`${URL}/Ingredient/`, {
    cache: "no-store",
  }).then((res) => res.json());
};

export const getIngredientsList = async () => {
  return await fetch(`${URL}/Group/`, {
    cache: "no-store",
  }).then((res) => res.json());
};

export const postIngredient = async (ingredient: Ingredient) => {
  return await fetch(`${URL}/Ingredient/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ingredient),
  })
    .then((res) => res.json())
    .then((data) => (data.error ? Promise.reject(data) : data));
};
