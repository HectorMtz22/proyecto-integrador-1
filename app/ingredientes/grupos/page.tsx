import Table from "@/components/Table";
import { TableActions } from "@/components/TableActions";
import { getIngredientsList } from "@/services/Ingredients";

export default async function GroupPage() {
  const groups = await getIngredientsList();
  return (
    <main className="container">
      <h1>Lista de Grupos de Ingredientes</h1>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id}>
              <td>{group.id}</td>
              <td>{group.name}</td>
              <td>{group.description}</td>
              <td>
                <TableActions id={group.id} section="ingredientes/grupos" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
}
