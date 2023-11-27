// import Image from 'next/image'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <iframe src="/dashboard/index.html" className={styles.iframe}></iframe>
    </main>
  );
}
