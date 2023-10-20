"use client";
import { FaTrash } from "react-icons/fa";
import styles from "./actions.module.css";
import { redirect } from "next/navigation";
import { deleteIngredient } from "@/services/Ingredients";

export const DeleteButton = ({ id }: { id: number }) => {
  const handleDelete = async () => {
    const willDelete = confirm("¿Estás seguro de eliminar este registro?");
    if (willDelete) {
      await deleteIngredient(id);
      redirect("/ingredientes/listado");
    }
  };
  return (
    <span className={styles.delete} onClick={handleDelete}>
      <FaTrash />
    </span>
  );
};
