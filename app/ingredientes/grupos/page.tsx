import Table from "@/components/Table";

export default function GroupPage() {
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
      </Table>
    </main>
  );
}
