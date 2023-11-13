import { Kind, PostExtra } from "@/types";
import { getExtras } from "./Dishes";
import statusCodes from "@/helpers/statusCodes";
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

export const postComplement = (complement: PostExtra) => {
  return fetch(`${API}/Extra`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(complement),
  }).then((res) => {
    if (!res.ok) throw new Error(statusCodes(res.status));
    return res.json();
  });
};
