export default interface Product {
  id: string;
  title: string;
  permalink: string;
  thumbnail: string;
  price: number;
  installments: {
    quantity: number;
    amount: string;
  } | null;
  address: {
    state_name: string;
    city_name: string;
  };
  shipping: {
    free_shipping: boolean;
  };
  sort: {
    id: string;
    name: string;
  };
}
