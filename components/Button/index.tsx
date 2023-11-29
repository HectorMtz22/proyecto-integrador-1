import styles from "./button.module.css";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  type: "primary" | "secondary" | "danger" | "success";
  children: string | React.ReactElement;
};

export default function Button({ children, type, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
}
