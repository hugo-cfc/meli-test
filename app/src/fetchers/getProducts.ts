import GetProductsData from "../@types/GetProducts";
import { fetchAppApi } from "../services/fetchAppApi";

const getProducts = async (search: string) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { query, results, sort, available_sorts, filters, availableFilters } =
    await fetchAppApi<GetProductsData>(search);

  return {
    query,
    results,
    sortApi: sort,
    available_sorts,
    filters,
    availableFilters,
  };
};

export default getProducts;
