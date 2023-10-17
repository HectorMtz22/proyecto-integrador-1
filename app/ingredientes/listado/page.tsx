import { getIngredients } from "@/services/Ingredients";
import styles from "./listado.module.css";
import { TableActions } from "@/components/TableActions";

export default async function IngredientesPage() {
  const data = await getIngredients();

  return (
    <main className={styles.container}>
      <h1>Lista de Ingredientes</h1>
      <table className={styles.list}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Disponible</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.id} className={styles.ingredient}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                {item.existence} {item.unit}
              </td>
              <td>
                <TableActions id={item.id} section="ingredientes" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
