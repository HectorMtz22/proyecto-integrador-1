import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./actions.module.css";
import { DeleteButton } from "./DeleteButton";

type TableActionsProps = {
  id: number;
  section: string;
  handleDelete: () => void;
};

export const TableActions = ({
  id,
  section,
  handleDelete,
}: TableActionsProps) => {
  return (
    <aside className={styles.container}>
      <Link href={`/${section}/editar/${id}`} className={styles.icon}>
        <FaEdit />
      </Link>
      <Link href={`/${section}/eliminar/${id}`} className={styles.delete}>
        <FaTrash />
      </Link>
      <span className={styles.delete} onClick={handleDelete}>
        <FaTrash />
      </span>
      <DeleteButton id={id} />
    </aside>
  );
};
