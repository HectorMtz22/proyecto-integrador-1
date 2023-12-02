"use client";
import styles from "./styles.module.css";
import { FaTrash } from "react-icons/fa6";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { deleteRecipe } from "@/services/Recipes";

type RecipeItemProps = {
  id?: number;
  name: string;
  count: number | string;
  isLink?: boolean;
};

export const RecipeItem = ({ count, name, isLink, id }: RecipeItemProps) => {
  const router = useRouter();
  const handleClick = (e: any) => {
    if (isLink) {
      router.push(`/recetas/${id}`);
    }
  };
  const handleDelete = (e: any) => {
    e.stopPropagation();
    const confirm = window.confirm("¿Estás seguro de eliminar el elemento?");
    if (confirm) {
      console.log("Eliminando receta");
      if (!isLink && id) {
        deleteRecipe(id);
      }
      router.refresh();
    }
  };
  return (
    <main className={styles.container} onClick={handleClick}>
      <section>
        <p>Nombre:</p>
        <h2>{name}</h2>
      </section>
      <section>
        <p>Cantidad:</p>
        <h2>{count}</h2>
      </section>
      <section>
        <h2>Acciones</h2>
        <Button type="danger" onClick={(e) => handleDelete(e)}>
          <article>
            <FaTrash /> <span>Eliminar</span>
          </article>
        </Button>
      </section>
    </main>
  );
};
