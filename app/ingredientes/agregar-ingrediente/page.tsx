"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AgregarIngrediente() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();

  const submit = (data: any) => {
    console.log(data);
    router.push("/ingredientes");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Agregar Ingrediente</h1>
      {formState.errors?.name && (
        <p className="error">El nombre del ingrediente es requerido</p>
      )}
      <input
        {...register("name", { required: true })}
        placeholder="Nombre del Ingrediente"
      />
      <button>Enviar</button>
    </form>
  );
}
