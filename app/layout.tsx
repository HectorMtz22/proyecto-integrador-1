import { Menu } from "@/components/Menu";
import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import {
  FaBoxOpen,
  FaHouse,
  FaPlateWheat,
  FaUtensils,
  FaWarehouse,
} from "react-icons/fa6";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Requisiciones",
  description: "Proyecto Integrador de Ingeniería de Software I",
};

const data = [
  {
    title: "Inicio",
    icon: <FaHouse />,
    destination: "/",
  },
  {
    title: "Inventario",
    icon: FaWarehouse(),
    destination: "/inventario",
  },
  {
    title: "Ingredientes",
    icon: <FaBoxOpen />,
    destination: "/ingredientes",
  },
  {
    title: "Platillos",
    icon: <FaUtensils />,
    destination: "/platillos",
  },
  {
    title: "Complementos",
    icon: <FaPlateWheat />,
    destination: "/complementos",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Menu data={data} />
        {children}
      </body>
    </html>
  );
}
