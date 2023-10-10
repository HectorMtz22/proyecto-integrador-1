"use client";
import { ReactElement } from "react";
import styles from "./menu.module.css";
import { Element } from "../MenuItem";
import { MenuProps } from "@/types";

export const Menu = ({ data, inline }: MenuProps) => {
  return (
    <nav className={styles.menu}>
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
