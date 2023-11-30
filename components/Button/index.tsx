import styles from "./button.module.css";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  type: "primary" | "secondary" | "danger" | "success";
  children: string | React.ReactElement;
};

export default function Button({ children, type, ...rest }: ButtonProps) {
  let className = styles.button;
  if (type === "danger") className += " " + styles.danger;
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
}
