import Layout from "@/components/Layout";
import { getDishes } from "@/services/Dishes";
import styles from "./listado.module.css";
import Table from "@/components/Table";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DishesPage() {
  const data = await getDishes();
  console.log(data);
  return (
    <Layout>
      <h1>Listado</h1>
      {/* Group */}
      {Object.keys(data).map((key) => (
        <main key={key} className={styles.listado}>
          <h2>{key}</h2>
          {/* Array of dishes */}

          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Temperatura</th>
                <th>Complemento</th>
                <th>Salsa</th>
                <th>Proteína</th>
              </tr>
            </thead>

            <tbody>
              {data[key].map((dish) => (
                <tr key={dish.id}>
                  <td>{dish.name}</td>
                  <td>{dish.temperature}</td>
                  <td>{dish.complement.name}</td>
                  <td>{dish.sauce.name}</td>
                  <td>{dish.protein.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </main>
      ))}
    </Layout>
  );
}
