import { Kind } from "@/types";
import { getExtras } from "./Dishes";
const API = process.env.NEXT_PUBLIC_API_URI;

export const getComplements = async () => {
  const data = await getExtras();
  console.log(data);
  return data;
};

export const getKinds = async (): Promise<Kind[]> => {
  const data: [] = await fetch(`${API}/Kind`, {
    cache: "no-store",
  }).then((res) => res.json());
  return data.map((kind: any) => ({
    id: kind.kind_ID,
    name: kind.kind_Name,
  }));
};
