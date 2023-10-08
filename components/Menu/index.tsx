"use client";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Element
        title="Requisiciones"
        icon={<FaHouse />}
        destination="/requisiciones"
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
  console.log(className);
  return (
    <Link href={destination} className={className}>
      {icon}
      <h3>{title}</h3>
    </Link>
  );
};
