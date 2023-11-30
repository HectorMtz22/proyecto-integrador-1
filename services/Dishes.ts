import { Dish, DishGroup, Extras } from "@/types";
import statusCodes from "@/helpers/statusCodes";

const API = process.env.NEXT_PUBLIC_API_URI;
export const getDishes = () => {
  return fetch(`${API}/Dish`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((res: Dish[]) => {
      // return Object.groupBy(res, ({ type }) => type)
      return res.reduce((prev: DishGroup, value) => {
        if (prev[value.type.name]) {
          prev[value.type.name].push(value);
        } else {
          prev[value.type.name] = [value];
        }
        return prev;
      }, {});
    });
};

export const getExtras = (): Promise<Extras> => {
  return fetch(`${API}/Extra`, {
    cache: "no-store",
  }).then((res) => res.json());
};

export const postDish = (dish: Dish) => {
  return fetch(`${API}/Dish`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...dish, assamble: true }),
  }).then((res) => {
    if (!res.ok) throw new Error(statusCodes(res.status));
    return res.json();
  });
};

export const getDishesList = () => {
  return fetch(`${API}/Dish`, {
    cache: "no-store",
  }).then((res) => res.json());
};
