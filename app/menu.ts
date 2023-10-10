import {
  FaBoxOpen,
  FaHouse,
  FaPlateWheat,
  FaUtensils,
  FaWarehouse,
} from "react-icons/fa6";

export const data = [
  {
    title: "Inicio",
    icon: FaHouse(),
    destination: "/",
  },
  {
    title: "Inventario",
    icon: FaWarehouse(),
    destination: "/inventario",
  },
  {
    title: "Ingredientes",
    icon: FaBoxOpen(),
    destination: "/ingredientes",
  },
  {
    title: "Platillos",
    icon: FaUtensils(),
    destination: "/platillos",
  },
  {
    title: "Complementos",
    icon: FaPlateWheat(),
    destination: "/complementos",
  },
];
