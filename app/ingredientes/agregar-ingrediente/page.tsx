"use client";
import { useForm } from "react-hook-form";

export default function AgregarIngrediente() {
  const { register, handleSubmit } = useForm();
  const submit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Agregar Ingrediente</h1>
      <input
        {...register("name", { required: true })}
        placeholder="Nombre del Ingrediente"
      />
      <button>Enviar</button>
    </form>
  );
}
