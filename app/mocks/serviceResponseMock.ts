import { availableFilters } from "./availableFilters";
import { availableSorts } from "./availableSorts";
import { filters } from "./filters";
import { product } from "./product";
import { sortMock } from "./sort";

export const serviceResponseMock = {
  paging: { total: 10 },
  results: [product],
  sort: sortMock[0],
  available_sorts: availableSorts,
  filters,
  availableFilters,
};
