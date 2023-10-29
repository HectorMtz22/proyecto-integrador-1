"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Dish } from "@/types";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
export default function AddDishPage() {
  const methods = useForm<Dish>();
  const submit: SubmitHandler<Dish> = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <h1>Agregar Platillo</h1>
        <Input
          name="name"
          placeholder="Escribe el nombre del platillo"
          requiredMessage
        />
        <Input
          type="select"
          name="temperature"
          placeholder="Temperatura del Platillo"
          requiredMessage="Selecciona la temperatura"
        >
          <option value="">Selecciona la temperatura</option>
          {["Caliente", "Frío", "Irrelevante"].map((temperature) => (
            <option key={temperature} value={temperature}>
              {temperature}
            </option>
          ))}
        </Input>
        <Button type="primary">Agregar</Button>
      </form>
    </FormProvider>
  );
}
