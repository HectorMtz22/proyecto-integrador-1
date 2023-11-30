"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { getDishes, getDishesList } from "@/services/Dishes";
import { getIngredients } from "@/services/Ingredients";
import { Dish, Ingredient, List, Recipe } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export default function NuevaRecetaPage() {
  const [ingredients, setIngredients] = useState<List[] | null>(null);
  const [dishes, setDishes] = useState<List[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const methods = useForm<Recipe>();
  const router = useRouter();

  useEffect(() => {
    getIngredients().then(setIngredients);
    getDishesList().then(setDishes);
  }, []);

  if (!ingredients || !dishes) return <p>Cargando...</p>;

  const submit: SubmitHandler<Recipe> = (data) => {
    console.log(data);
    // postDish(data)
    //   .then(() => {
    //     router.push("/platillos");
    //   })
    //   .catch((err: Error) => {
    //     console.warn(err);
    //     setError(err.message);
    //   });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <h1>Agregar Nueva Receta</h1>
        {error && <span className="error">{error}</span>}
        <Select data={dishes} label="Nombre del platillo" name="dish" />
        <Select data={ingredients} label="Ingrediente" name="ingredient" />
        <Input
          type="number"
          name="existence"
          placeholder="Cantidad en Existencia"
          requiredMessage="Escribe la cantidad en existencia"
        />
        <Button type="primary">Agregar</Button>
      </form>
    </FormProvider>
  );
}
