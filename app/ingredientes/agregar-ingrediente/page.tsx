"use client";
import { useEffect, useState } from "react";
import { getIngredientsList } from "@/services/Ingredients";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AgregarIngrediente() {
  const [ingredientList, setIngredientList] = useState([]);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();

  useEffect(() => {
    getIngredientsList().then((res) => {
      setIngredientList(res);
    });
  }, []);

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
        autoFocus
      />
      <article className="row">
        <input
          {...register("stock", { required: true })}
          placeholder="Cantidad en existencia"
        />
        <input {...register("unit", { required: true })} placeholder="Unidad" />
      </article>
      <select {...register("group", { required: true })}>
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
