import { getComplements } from "@/services/Complements";
import styles from "./listado.module.css";
import { List } from "@/types";

export default async function Page() {
  const { complements, proteins, sauces, types } = await getComplements();
  return (
    <main className={styles.listado}>
      <h1>Complementos</h1>
      <section>
        <h2>Complementos</h2>
        <Complement complement={complements} />
      </section>
      <section>
        <h2>Proteínas</h2>
        <Complement complement={proteins} />
      </section>
      <section>
        <h2>Salsas</h2>
        <Complement complement={sauces} />
      </section>
      <section>
        <h2>Tipos</h2>
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
      <div key={item.id}>
        <h2>{item.name}</h2>
      </div>
    );
  });
};
