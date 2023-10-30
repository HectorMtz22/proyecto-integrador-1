import { Dish, DishGroup, Extras } from "@/types";

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
