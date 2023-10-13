import { getIngredients } from "@/services/Ingredients";

export default async function IngredientesPage() {
  const data = await getIngredients();
  console.log(data);
  return (
    <>
      {data.map((item: any) => (
        <section key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </section>
      ))}
    </>
  );
}
