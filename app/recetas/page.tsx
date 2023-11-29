import { RecipeItem } from "@/components/RecipeItem";
import { getRecipes } from "@/services/Recipes";

export default async function RecetasPage() {
  const data = await getRecipes();
  console.log(data);
  return (
    <main className="container">
      <h1>Lista de Recetas</h1>
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
