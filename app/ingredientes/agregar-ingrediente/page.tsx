"use client";
import { useEffect, useState } from "react";
import { getIngredientsList, postIngredient } from "@/services/Ingredients";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import Input from "@/components/Input";

export default function AgregarIngrediente() {
  const [ingredientList, setIngredientList] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const methods = useForm();

  useEffect(() => {
    getIngredientsList().then((res) => {
      setIngredientList(res);
    });
  }, []);

  const submit = (data: any) => {
    console.log(data);
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <h1>Agregar Ingrediente</h1>
        <Input
          name="name"
          placeholder="Nombre del Ingrediente"
          autoFocus
          required=""
        />
        <article className="row">
          <Input
            name="existence"
            type="number"
            placeholder="Cantidad en existencia"
            required
          />
          <Input name="unit" placeholder="Unidad" />
        </article>
        <select {...methods.register("group_id", { required: true })}>
          <option value="">Selecciona un grupo</option>
          {ingredientList.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button>Enviar</button>
      </form>
    </FormProvider>
  );
}
