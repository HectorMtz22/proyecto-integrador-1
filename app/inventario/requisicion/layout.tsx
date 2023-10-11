import { Metadata } from "next";
import styles from "./requisicion.module.css";

export const metadata: Metadata = {
  title: "Requisicion Activa",
  description: "Proyecto Integrador de Ingeniería de Software I",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={styles.layout}>{children}</main>;
}
