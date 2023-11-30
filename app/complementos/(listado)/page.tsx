import { getComplements } from "@/services/Complements";
import styles from "./listado.module.css";
import { List } from "@/types";

export default async function Page() {
  const { complements, proteins, sauces, types } = await getComplements();
  return (
    <main className={styles.listado}>
      <h1>Listado por Tipo de Complemento</h1>
      <section>
        <h2>Complementos</h2>
        <hr />
        <Complement complement={complements} />
      </section>
      <section>
        <h2>Proteínas</h2>
        <hr />
        <Complement complement={proteins} />
      </section>
      <section>
        <h2>Salsas</h2>
        <hr />
        <Complement complement={sauces} />
      </section>
      <section>
        <h2>Tipos</h2>
        <hr />
        <Complement complement={types} />
      </section>
    </main>
  );
}

type ComplementProps = {
  complement: List[];
};
const Complement = ({ complement }: ComplementProps) => {
  return complement.map((item) => {
    return (
      <aside key={item.id} className={styles.element}>
        <p>{item.name}</p>
      </aside>
    );
  });
};
