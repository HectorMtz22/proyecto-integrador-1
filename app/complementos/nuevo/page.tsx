"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { getKinds, postComplement } from "@/services/Complements";
import { Kind, PostExtra } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
export default function ComlementoNuevoPage() {
  const [kinds, setKinds] = useState<Kind[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const methods = useForm<PostExtra>();
  const router = useRouter();
  useEffect(() => {
    getKinds().then(setKinds);
  }, []);
  if (!kinds) return <p>Cargando...</p>;
  const submit: SubmitHandler<PostExtra> = (data) => {
    console.log(data);
    postComplement(data)
      .then(() => {
        router.push("/complementos");
      })
      .catch((err: Error) => {
        console.warn(err);
        setError(err.message);
      });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <h1>Agregar Nuevo Complemento</h1>
        {error && <span className="error">{error}</span>}
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
        <Select name="kind" label="Tipo de complemento" data={kinds} />
        <Button type="primary">Agregar</Button>
      </form>
    </FormProvider>
  );
}
