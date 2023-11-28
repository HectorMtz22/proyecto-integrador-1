import { Metadata } from "next";
import { Menu } from "@/components/Menu";
import menuData from "./menu.json";

const title = "Recetas";
export const metadata: Metadata = {
  title,
  description: "Proyecto Integrador de Ingeniería de Software I",
};

export default function DishesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu data={menuData} inline title={title} />
      {children}
    </>
  );
}
