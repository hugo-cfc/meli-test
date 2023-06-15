import Product from "../@types/Product";
import { fetchWrapper } from "../services/fetchWrapper";

interface GetProductsProps {
  search: string;
}

const getProducts = async ({ search }: GetProductsProps) => {
  const { results } = await fetchWrapper<{ results: Product[] }>(`${search}`);

  return results;
};

export default getProducts;
