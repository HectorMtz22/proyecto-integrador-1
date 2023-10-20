import { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Grupos de Ingredientes",
  description: "Grupos de Ingredientes",
};

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
