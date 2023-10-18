import styles from "./button.module.css";

type ButtonProps = {
  type: "primary" | "secondary" | "danger" | "success";
  children: string;
};

export default function Button({ children, type }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
