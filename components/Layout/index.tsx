import { ReactNode } from "react";
import styles from "./layout.module.css";
type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return <main className={styles.container}>{children}</main>;
}
