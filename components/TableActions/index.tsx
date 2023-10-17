import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

type TableActionsProps = {
  id: string;
  section: string;
};

export const TableActions = ({ id, section }: TableActionsProps) => {
  return (
    <>
      <Link href={`/${section}/editar/${id}`}>
        <FaEdit />
      </Link>
      <Link href={`/${section}/eliminar/${id}`}>
        <FaTrash />
      </Link>
    </>
  );
};
