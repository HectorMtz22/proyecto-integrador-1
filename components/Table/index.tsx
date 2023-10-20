import styles from "./table.module.css";
export default function Table({ children }: { children: React.ReactNode }) {
  return <table className={styles.table}>{children}</table>;
}
