/* eslint-disable @typescript-eslint/naming-convention */
import GetProductsData from "../@types/GetProducts";
import { fetchAppApi } from "../services/fetchAppApi";

const getProducts = async (search: string) => {
  const {
    query,
    paging,
    results,
    sort,
    available_sorts,
    filters,
    availableFilters,
  } = await fetchAppApi<GetProductsData>(search);

  return {
    query,
    paging,
    results,
    sortApi: sort,
    available_sorts,
    filters,
    availableFilters,
  };
};

export default getProducts;
