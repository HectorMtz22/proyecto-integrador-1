import { InputHTMLAttributes } from "react";
import { FieldValue, useFormContext } from "react-hook-form";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<FieldValue<HTMLInputElement>> {
  messageError?: string;
}

export default function Input(props: InputProps) {
  const {
    name = "na",
    required,
    messageError = "Este campo es requerido",
    ...rest
  } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const typeInput =
    props.type === "select" ? (
      <select {...register(name, { required })} {...rest}>
        {props.children}
      </select>
    ) : (
      <input {...register(name, { required })} {...rest} />
    );
  return (
    <section className={styles.container}>
      {errors[name] && <span className="error">{messageError}</span>}
      {typeInput}
    </section>
  );
}
