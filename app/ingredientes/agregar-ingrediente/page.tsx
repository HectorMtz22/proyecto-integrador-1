"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AgregarIngrediente() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();

  const errors = Object.keys(formState.errors);
  const submit = (data: any) => {
    console.log(data);
    router.push("/ingredientes");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Agregar Ingrediente</h1>
      {Boolean(errors.length) && (
        <span className="error">Campos Requeridos</span>
      )}
      <input
        {...register("name", { required: true })}
        placeholder="Nombre del Ingrediente"
      />
      <input
        {...register("type", { required: true })}
        placeholder="Nombre del Ingrediente"
      />
      <button>Enviar</button>
    </form>
  );
}
