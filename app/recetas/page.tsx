import { getRecipes } from "@/services/Recipes";

export default async function RecetasPage() {
  const data = await getRecipes();
  console.log(data);
  return (
    <main className="container">
      <h1>Lista de Recetas</h1>
    </main>
  );
}
