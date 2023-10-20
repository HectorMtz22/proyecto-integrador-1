"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { postIngredientGroup } from "@/services/Ingredients";
import { IngredientGroup } from "@/types";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
export default function AddGroup() {
  const methods = useForm<IngredientGroup>();
  const [error, setError] = useState<string | null>(null);

  const submit: SubmitHandler<IngredientGroup> = (data) => {
    postIngredientGroup(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <h1>Agregar Grupo</h1>
        {error && <span className="error">{error}</span>}
        <Input
          name="name"
          placeholder="Nombre del Grupo"
          autoFocus
          messageError="El nombre es requerido"
          required
        />
        <Input
          name="description"
          placeholder="Descripción"
          messageError="La descripción es requerida"
          required
        />
        <Button type="primary">Agregar</Button>
      </form>
    </FormProvider>
  );
}
