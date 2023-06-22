import Filter from "../src/@types/Filter";

export const availableFilters: Filter = {
  id: "price",
  name: "Precio",
  type: "range",
  values: [
    {
      id: "3000.0-4000.0",
      name: "$3.000 a $4.000",
      results: 27,
    },
  ],
};

export const noFilters: Filter = {
  id: "price",
  name: "Precio",
  type: "range",
  values: [],
};
