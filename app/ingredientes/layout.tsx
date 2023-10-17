import { Menu } from "@/components/Menu";
import menuData from "./menu.json";
import { Metadata } from "next";
const title = "Ingredientes";

export const metadata: Metadata = {
  title: `Listado de ${title}`,
  description: "Ingredientes de la aplicación",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu data={menuData} title={title} inline />
      {children}
    </>
  );
}
