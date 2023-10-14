import { Menu } from "@/components/Menu";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { data } from "./menu";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Requisiciones",
  description: "Proyecto Integrador de Ingeniería de Software I",
};

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
