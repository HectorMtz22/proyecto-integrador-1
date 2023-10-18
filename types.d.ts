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
