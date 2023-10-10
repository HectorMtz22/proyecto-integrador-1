import { ReactElement } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./menuItem.module.css";

export const Element = ({
  title,
  icon,
  destination,
  inline = false,
}: {
  title: string;
  icon: ReactElement;
  destination: string;
  inline?: boolean;
}) => {
  const pathName = usePathname();
  const isActive = pathName === destination;
  let className;
  if (inline) {
    className = `${styles.element} ${styles.inline} ${
      isActive && styles.active
    }`;
  } else {
    className = `${styles.element} ${isActive && styles.active}`;
  }
  return (
    <Link href={destination} className={className}>
      <span className={styles.icon}>{icon}</span>
      <h3>{title}</h3>
    </Link>
  );
};
