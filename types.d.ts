import { types } from "util";

export type MenuProps = {
  data: MenuItemProps[];
  inline?: boolean;
  title?: string;
};

export type MenuItemProps = {
  title: string;
  destination: string;
  icon?: ReactElement;
};

export type Ingredient = {
  id?: number;
  group_id: number;
  existence: number;
  name: string;
  unit: string;
};

export type IngredientGroup = {
  id?: number;
  name: string;
  description: string;
  hexColor: string;
};

export type GetIngredientGroup = IngredientGroup & {
  id: number;
};

type List = {
  id: number;
  name: string;
};

export type Dish = {
  id?: number;
  name: string;
  assamble: boolean;
  temperature: "Frío" | "Caliente" | "Irrelevante";
  last_made: string;
  services: number;
  rating: number;
  complement: List;
  sauce: List;
  protein: List;
  type: List;
};

export type DishGroup = {
  [key: string]: Dish[];
};

export type Extras = {
  proteins: List[];
  sauces: List[];
  complements: List[];
  types: List[];
};

export type Kind = {
  id: number;
  name: string;
};

export type PostExtra = {
  description: string;
  kind_id: number;
  name: string;
};
