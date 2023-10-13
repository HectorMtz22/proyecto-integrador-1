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
