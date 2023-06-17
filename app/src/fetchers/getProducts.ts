import GetProductsData from "../@types/GetProducts";
import { fetchAppApi } from "../services/fetchAppApi";

const getProducts = async (search: string) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { query, results, sort, available_sorts, filters, available_filters } =
    await fetchAppApi<GetProductsData>(search);

  return {
    query,
    results,
    sortApi: sort,
    available_sorts,
    filters,
    available_filters,
  };
};

export default getProducts;
