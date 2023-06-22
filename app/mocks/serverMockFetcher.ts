import { rest } from "msw";
import { setupServer } from "msw/node";

import { availableFilters } from "./availableFilters";
import { availableSorts } from "./availableSorts";
import { filters } from "./filters";
import { product } from "./product";
import { sortMock } from "./sort";

export const server = setupServer(
  rest.get(`/api/products`, (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get("query");

    const mockApiResponse = {
      query: searchQuery,
      paging: { total: 10 },
      results: [product],
      sort: sortMock[0],
      available_sorts: availableSorts,
      filters,
      availableFilters,
    };

    return res(ctx.json(mockApiResponse));
  })
);
