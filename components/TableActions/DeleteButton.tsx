"use client";
import { useRouter } from "next/navigation";
import { deleteIngredient } from "@/services/Ingredients";
import { FaTrash } from "react-icons/fa";
import styles from "./actions.module.css";

export const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const willDelete = confirm("¿Estás seguro de eliminar este registro?");
    if (willDelete) {
      await deleteIngredient(id);
      router.refresh();
    }
  };
  return (
    <span className={styles.delete} onClick={handleDelete}>
      <FaTrash />
    </span>
  );
};
