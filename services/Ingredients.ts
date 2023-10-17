const URL = process.env.NEXT_PUBLIC_API_URI;
export const getIngredients = async () => {
  console.log(URL);
  return await fetch(`${URL}/Ingredient/`, {
    cache: "no-store",
  }).then((res) => res.json());
};

export const getIngredientsList = async () => {
  return await fetch(`${URL}/Group/`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      return data.map((data: any) => ({
        name: data.group_Name,
        id: data.group_ID,
      }));
    });
};
