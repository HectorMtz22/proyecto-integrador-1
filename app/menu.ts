import {
  FaBoxOpen,
  FaHouse,
  FaPlateWheat,
  FaUtensils,
  FaFileLines,
} from "react-icons/fa6";

export const data = [
  {
    title: "Inicio",
    icon: FaHouse(),
    destination: "/",
  },
  {
    title: "Recetas",
    icon: FaFileLines(),
    destination: "/recetas",
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
