import Filter from "./Filter";
import Product from "./Product";
import Sort from "./Sort";

export default interface GetProduct {
  query: string;
  results: Product[];
  sort: Sort;
  available_sorts: Sort[];
  filters: Filter[];
  availableFilters: Filter;
  available_filters: Filter[];
}
