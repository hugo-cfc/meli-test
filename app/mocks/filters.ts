export const filters = [
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

export const filtersWithoutPrice = [
  {
    id: "state",
    name: "Ubicación",
    type: "text",
    values: [],
  },
];
