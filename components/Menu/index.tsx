"use client";
import { ReactElement } from "react";
import styles from "./menu.module.css";
import { Element } from "../MenuItem";
import { MenuProps } from "@/types";

export const Menu = ({ data, inline }: MenuProps) => {
  let className = `${styles.menu} ${inline && styles.inline}`;
  return (
    <nav className={className}>
      {inline && <h2 className={styles.title}>Inventario</h2>}
      {data.map((item) => (
        <Element
          key={item.title}
          title={item.title}
          icon={item.icon}
          destination={item.destination}
          inline={inline}
        />
      ))}
    </nav>
  );
};
