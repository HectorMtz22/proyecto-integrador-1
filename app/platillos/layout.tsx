import { Metadata } from "next";
import { Menu } from "@/components/Menu";
import { menu } from "./menu";

const title = "Platillos";
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
      <Menu data={menu} inline title={title} />
      {children}
    </>
  );
}
