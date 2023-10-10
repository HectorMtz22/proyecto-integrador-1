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

type MenuProps = {
  title: string;
  icon: ReactElement;
  destination: string;
}[];

export const Menu = (data: MenuProps) => {
  return (
    <nav className={styles.menu}>
      {data.map((item) => (
        <Element
          key={item.title}
          title={item.title}
          icon={item.icon}
          destination={item.destination}
        />
      ))}
    </nav>
  );
};
