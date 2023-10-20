"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { postIngredientGroup } from "@/services/Ingredients";
import { IngredientGroup } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export default function AddGroup() {
  const router = useRouter();
  const methods = useForm<IngredientGroup>();
  const [error, setError] = useState<string | null>(null);

  const submit: SubmitHandler<IngredientGroup> = (data) => {
    postIngredientGroup(data)
      .then(() => {
        router.push("/ingredientes/grupos");
      })
      .catch((err: Error) => {
        console.warn(err);
        setError(err.message);
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
