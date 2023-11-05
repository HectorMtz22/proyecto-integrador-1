import Link from "next/link";
import Image from "next/image";
import stylesFromButton from "../components/Button/button.module.css";
import styles from "./errors.module.css";
export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1>Error: Página no encontrada</h1>
      <Image
        src="/404.svg"
        width={600}
        height={600}
        alt="Contenido no encontrado"
      />
      <Link href="/" className={stylesFromButton.button}>
        Ir al inicio
      </Link>
    </main>
  );
}
