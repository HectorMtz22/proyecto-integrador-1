import { getRecipe } from "@/services/Recipes";
import styles from "./receta.module.css";
import { RecipeItem } from "@/components/RecipeItem";
import { GoBack } from "@/components/GoBack";

export default async function RecipeById({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getRecipe(Number(id));
  console.log(data);
  return (
    <main className={styles.container}>
      <h1>
        <GoBack />
        {data.dish}
      </h1>
      {data.ingredients.map((ingredient) => (
        <RecipeItem
          key={ingredient.id}
          id={ingredient.id}
          name={ingredient.name}
          count={`${ingredient.existence} ${ingredient.unit}`}
          isLink={false}
        />
      ))}
    </main>
  );
}
