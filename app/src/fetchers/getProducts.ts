import Product from "../@types/Product";
import { fetchWrapper } from "../services/fetchWrapper";

const getProducts = async (search: string) => {
  const { results } = await fetchWrapper<{ results: Product[] }>(search);

  return results;
};

export default getProducts;
