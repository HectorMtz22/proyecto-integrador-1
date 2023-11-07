import styles from "./button.module.css";

type ButtonProps = {
  type: "primary" | "secondary" | "danger" | "success";
  children: string;
};

export default function Button({ children, type, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
