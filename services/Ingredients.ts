const URL = process.env.NEXT_PUBLIC_API_URI;
export const getIngredients = async () => {
  console.log(URL);
  return await fetch(`${URL}/Ingredient/`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => {
      return data.map((data: any) => ({
        id: data.ingredient_ID,
        name: data.ingredient_Name,
        unit: data.ingredient_Unit,
        last_used: data.ingredient_Last_Used,
        existence: data.ingredient_Existence,
        group: data.group_ID,
      }));
    });
};
