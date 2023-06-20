import Product from "../src/@types/Product";

export const product: Product = {
  id: "MLA830241407",
  title: "Beginner's Guide To Silk Ribbon Embroidery - Ann Cox (pap...",
  permalink:
    "https://articulo.mercadolibre.com.ar/LA-830241407-beginners-guide-to-silk-ribbon-embroidery-ann-cox-pap-_JM",
  thumbnail: "http://http2.mlstatic.com/D_997577-MLA42542033765_072020-I.jpg",
  price: 4575,
  installments: {
    quantity: 12,
    amount: "1119.41",
  },
  address: {
    state_name: "Capital Federal",
    city_name: "Caba",
  },
  shipping: {
    free_shipping: true,
  },
  sort: {
    id: "relevance",
    name: "Más relevantes",
  },
};

export const noInstallmentsProduct = {
  ...product,
  installments: null,
};

export const noFreeShipingProduct = {
  ...product,
  shipping: {
    free_shipping: false,
  },
};
