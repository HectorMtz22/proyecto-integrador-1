"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { getKinds } from "@/services/Complements";
import { Kind, PostExtra } from "@/types";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
export default function ComlementoNuevoPage() {
  const [kinds, setKinds] = useState<Kind[] | null>(null);
  const methods = useForm<PostExtra>();
  useEffect(() => {
    getKinds().then(setKinds);
  }, []);
  console.log(kinds);
  if (!kinds) return <p>Cargando...</p>;
  const submit: SubmitHandler<PostExtra> = () => {};
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <h1>Agregar Nuevo Complemento</h1>
        <Input
          name="name"
          placeholder="Escribe el nombre del complemento"
          requiredMessage="Escribe el nombre del complemento"
        />
        <Input
          name="description"
          placeholder="Escribe la descripción del complemento"
          requiredMessage
        />
        <Select name="kind_id" label="Tipo de complemento" data={kinds} />
        <Button type="primary">Agregar</Button>
      </form>
    </FormProvider>
  );
}
