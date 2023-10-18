import { useFormContext } from "react-hook-form";
import styles from "./input.module.css";

export default function Input({ name, required, type, ...rest }: any) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorLabel =
    typeof required !== "boolean" ? required : "Este campo es requerido";

  return (
    <section className={styles.container}>
      {errors[name] && <span className="error">{errorLabel}</span>}
      <input type={type} {...register(name, { required })} {...rest} />
    </section>
  );
}
