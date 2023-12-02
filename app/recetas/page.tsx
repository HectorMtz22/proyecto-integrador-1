import Button from "@/components/Button";
import { RecipeItem } from "@/components/RecipeItem";
import { getRecipes } from "@/services/Recipes";
import Link from "next/link";

export default async function RecetasPage() {
  const data = await getRecipes();
  console.log(data);
  return (
    <main className="container">
      <h1>Lista de Recetas</h1>
      {data.length === 0 && (
        <>
          <h2>No hay recetas activas</h2>
          <Link href="/recetas/nueva">
            <Button type="primary">Agregar Receta</Button>
          </Link>
        </>
      )}
      {data.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          name={recipe.dish}
          count={recipe.count}
          isLink
        />
      ))}
    </main>
  );
}
