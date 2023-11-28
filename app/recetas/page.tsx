import { getRecipes } from "@/services/Recipes";

export default async function RecetasPage() {
  const data = await getRecipes();
  console.log(data);
  return (
    <main className="container">
      <h1>Lista de Recetas</h1>
      {data.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.dish}</h2>
          <h2>Cantidad: {recipe.count}</h2>
        </div>
      ))}
    </main>
  );
}
