import { Menu } from "@/components/Menu";
import { data } from "./menu";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu data={data} inline />
      {children}
    </>
  );
}
