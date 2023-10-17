import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./actions.module.css";

type TableActionsProps = {
  id: string;
  section: string;
};

export const TableActions = ({ id, section }: TableActionsProps) => {
  return (
    <aside className={styles.container}>
      <Link href={`/${section}/editar/${id}`} className={styles.icon}>
        <FaEdit />
      </Link>
      <Link href={`/${section}/eliminar/${id}`} className={styles.delete}>
        <FaTrash />
      </Link>
    </aside>
  );
};
