import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./actions.module.css";
import { DeleteButton } from "./DeleteButton";

type TableActionsProps = {
  id: number;
  section: string;
};

export const TableActions = ({ id, section }: TableActionsProps) => {
  return (
    <aside className={styles.container}>
      <Link href={`/${section}/editar/${id}`} className={styles.icon} hidden>
        <FaEdit />
      </Link>
      <DeleteButton id={id} />
    </aside>
  );
};
