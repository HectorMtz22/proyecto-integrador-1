"use client";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHouse, FaWarehouse } from "react-icons/fa6";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Element title="Inicio" icon={<FaHouse />} destination="/" />
      <Element
        title="Inventario"
        icon={<FaWarehouse />}
        destination="/inventario"
      />
    </nav>
  );
};

const Element = ({
  title,
  icon,
  destination,
}: {
  title: string;
  icon: ReactElement;
  destination: string;
}) => {
  const pathName = usePathname();
  const isActive = pathName === destination;
  const className = styles.element + " " + (isActive ? styles.active : "");
  return (
    <Link href={destination} className={className}>
      <span className={styles.icon}>{icon}</span>
      <h3>{title}</h3>
    </Link>
  );
};
