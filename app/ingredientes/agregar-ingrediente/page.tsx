"use client";
import { useEffect, useState } from "react";
import { getIngredientsList, postIngredient } from "@/services/Ingredients";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";

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
    postIngredient(data)
      .then((res) => {
        router.push("/ingredientes");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <h1>Agregar Ingrediente</h1>
        {error && <span className="error">{error}</span>}
        <Input
          name="name"
          placeholder="Nombre del Ingrediente"
          autoFocus
          messageError="El nombre es requerido"
          required
        />
        <article className="row">
          <Input
            name="existence"
            type="number"
            placeholder="Cantidad en existencia"
            messageError="La cantidad es requerida"
            required
          />
          <Input name="unit" placeholder="Unidad" required />
        </article>
        <Input
          name="group_id"
          type="select"
          required
          messageError="Selecciona el grupo adecuado"
        >
          <option value="">Selecciona un grupo</option>
          {ingredientList.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Input>
        <Button type="primary">Enviar</Button>
      </form>
    </FormProvider>
  );
}
