"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { IngredientGroup } from "@/types";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
export default function AddGroup() {
  const methods = useForm<IngredientGroup>();
  const submit: SubmitHandler<IngredientGroup> = (data) => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <h1>Agregar Grupo</h1>
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
