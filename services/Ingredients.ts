import statusCodes from "@/helpers/statusCodes";
import { GetIngredientGroup, Ingredient, IngredientGroup } from "@/types";
import { revalidatePath } from "next/cache";

const URL = process.env.NEXT_PUBLIC_API_URI;
export const getIngredients = async () => {
  console.log(URL);
  return await fetch(`${URL}/Ingredient/`, {
    cache: "no-store",
    next: {
      tags: ["ingredients"],
    },
  }).then((res) => res.json());
};

export const getIngredientsList = async (): Promise<GetIngredientGroup[]> => {
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
  }).then((res) => {
    if (!res.ok) throw new Error(statusCodes(res.status));
    return res.json();
  });
};

export const postIngredientGroup = async (group: IngredientGroup) => {
  return await fetch(`${URL}/Group/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(group),
  }).then((res) => {
    if (!res.ok) throw new Error(statusCodes(res.status));
    return res.json();
  });
};

export const deleteIngredient = async (id: number) => {
  return await fetch(`${URL}/Ingredient/${id}`, {
    method: "DELETE",
  });
};
