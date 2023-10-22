import { getIngredients } from "@/services/Ingredients";
import styles from "./listado.module.css";
import { TableActions } from "@/components/TableActions";

export default async function IngredientesPage() {
  let error = "";
  const data = await getIngredients().catch((err: Error) => {
    console.error(err);
    error = "Ocurrió un error al obtener los ingredientes";
    return [];
  });

  return (
    <main className={styles.container}>
      <h1>Lista de Ingredientes</h1>
      {error && <h3 className="error">{error}</h3>}
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
