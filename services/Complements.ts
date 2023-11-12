import { getExtras } from "./Dishes";

export const getComplements = async () => {
  const data = await getExtras();
  console.log(data);
  return data;
};
