export type MenuProps = {
  data: {
    title: string;
    icon?: ReactElement;
    destination: string;
  }[];
  inline?: boolean;
};
