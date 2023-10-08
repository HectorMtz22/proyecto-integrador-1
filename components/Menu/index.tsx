import { ReactElement } from "react";
import { useRouter } from "next/router";
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
  return (
    <Link href={destination} className={styles.element}>
      {icon}
      <h3>{title}</h3>
    </Link>
  );
};
