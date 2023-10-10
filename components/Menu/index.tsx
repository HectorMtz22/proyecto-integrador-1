"use client";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaBoxOpen,
  FaHouse,
  FaPlateWheat,
  FaUtensils,
  FaWarehouse,
} from "react-icons/fa6";
import styles from "./menu.module.css";
import { Element } from "../MenuItem";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Element title="Inicio" icon={<FaHouse />} destination="/" />
      <Element
        title="Inventario"
        icon={FaWarehouse()}
        destination="/inventario"
      />
      <Element
        title="Ingredientes"
        icon={<FaBoxOpen />}
        destination="/ingredientes"
      />
      <Element
        title="Platillos"
        icon={<FaUtensils />}
        destination="/platillos"
      />
      <Element
        title="Complementos"
        icon={<FaPlateWheat />}
        destination="/complementos"
      />
    </nav>
  );
};
