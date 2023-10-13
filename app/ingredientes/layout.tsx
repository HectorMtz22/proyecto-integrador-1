import { Menu } from "@/components/Menu";
import { data } from "./menu";
const title = "Ingredientes";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu data={data} title={title} inline />
      {children}
    </>
  );
}
