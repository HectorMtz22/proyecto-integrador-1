import { InputHTMLAttributes } from "react";
import { FieldValue, useFormContext } from "react-hook-form";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<FieldValue<HTMLInputElement>> {
  requiredMessage?: boolean | string | undefined;
}

export default function Input({
  name = "na",
  requiredMessage,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const typeInput =
    rest.type === "select" ? (
      <select {...register(name, { required: requiredMessage })} {...rest}>
        {rest.children}
      </select>
    ) : (
      <input {...register(name, { required: requiredMessage })} {...rest} />
    );
  return (
    <section className={styles.container}>
      {errors[name] && (
        <span className="error">
          {errors[name]?.message?.toString() || "Este campo es requerido"}
        </span>
      )}
      {typeInput}
    </section>
  );
}
