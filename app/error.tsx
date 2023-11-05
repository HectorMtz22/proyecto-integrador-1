"use client";
import Image from "next/image";
import styles from "./errors.module.css";
import { useEffect } from "react";

export default function ErrorPage({ reset }: { reset: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      reset();
      console.error("Reintentando conexión...");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [reset]);

  return (
    <main className={styles.main}>
      <h1>Error de Servidor</h1>
      <h3>Reintentando Conexión...</h3>
      <Image
        src="/server-error.svg"
        width={600}
        height={600}
        priority
        alt="Error de Server"
      />
    </main>
  );
}
