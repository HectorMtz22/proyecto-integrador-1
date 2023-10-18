"use client";
import { useEffect, useState } from "react";
import { getIngredientsList, postIngredient } from "@/services/Ingredients";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AgregarIngrediente() {
  const [ingredientList, setIngredientList] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();

  useEffect(() => {
    getIngredientsList().then((res) => {
      setIngredientList(res);
    });
  }, []);

  const errors = Object.keys(formState.errors);
  const submit = (data: any) => {
    postIngredient(data)
      .then((res) => {
        console.log(res);
        router.push("/ingredientes");
      })
      .catch(() => {
        setError("Error al guardar el ingrediente");
      });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Agregar Ingrediente</h1>
      {error && <span className="error">{error}</span>}
      {Boolean(errors.length) && (
        <span className="error">Campos Requeridos</span>
      )}
      <input
        {...register("name", { required: true })}
        placeholder="Nombre del Ingrediente"
        autoFocus
      />
      <article className="row">
        <input
          type="number"
          {...register("existence", { required: true })}
          placeholder="Cantidad en existencia"
        />
        <input {...register("unit", { required: true })} placeholder="Unidad" />
      </article>
      <select {...register("group_id", { required: true })}>
        <option value="">Selecciona un grupo</option>
        {ingredientList.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <button>Enviar</button>
    </form>
  );
}
