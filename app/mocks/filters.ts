import Filter from "../src/@types/Filter";

export const filters: Filter[] = [
  {
    id: "price",
    name: "Precio",
    type: "range",
    values: [
      {
        id: "3000.0-9500.0",
        name: "$3.000 a $9.500",
      },
    ],
  },
];

export const filtersWithoutPrice: Filter[] = [
  {
    id: "state",
    name: "Ubicación",
    type: "text",
    values: [],
  },
];
