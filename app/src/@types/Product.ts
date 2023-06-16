export default interface Product {
  id: string;
  title: string;
  permalink: string;
  price: number;
  installments: {
    quantity: number;
    amount: string;
  };
  address: {
    state_name: string;
    city_name: string;
  };
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  sort: {
    id: string;
    name: string;
  };
}
