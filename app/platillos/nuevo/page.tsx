"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { getExtras } from "@/services/Dishes";
import { Dish, Extras, List } from "@/types";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
export default function AddDishPage() {
  const [extras, setExtras] = useState<Extras | null>(null);
  const methods = useForm<Dish>();
  useEffect(() => {
    getExtras().then(setExtras);
  }, []);
  const submit: SubmitHandler<Dish> = (data) => console.log(data);

  if (!extras) return <p>Cargando...</p>;
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
        <article className="row">
          <Select
            name="complement"
            label="Complemento"
            data={extras.complements}
          />
          <Select name="protein" label="Proteína" data={extras.proteins} />
        </article>
        <article className="row">
          <Select name="sauce" label="Salsa" data={extras.sauces} />
          <Select name="type" label="Tipo" data={extras.types} />
        </article>
        <Button type="primary">Agregar</Button>
      </form>
    </FormProvider>
  );
}

type SelectProps = {
  name: string;
  label: string;
  data: List[];
};
const Select = ({ name, data, label }: SelectProps) => (
  <Input type="select" name={`${name}_id`} requiredMessage>
    <option value="">Selecciona {label}</option>
    {data.map((el) => (
      <option key={el.id} value={el.id}>
        {el.name}
      </option>
    ))}
  </Input>
);
