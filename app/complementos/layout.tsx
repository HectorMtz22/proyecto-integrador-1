import { Menu } from "@/components/Menu";
import menuData from "./menu.json";
import { Metadata } from "next";
const title = "Complementos";

export const metadata: Metadata = {
  title: `Listado de ${title}`,
  description: "Complementos de la aplicación",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu data={menuData} title={title} inline />
      {children}
    </>
  );
}
