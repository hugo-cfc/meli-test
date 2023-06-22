/* eslint-disable @typescript-eslint/naming-convention */
import { waitFor } from "@testing-library/react";

import { availableSorts } from "../../mocks/availableSorts";
import { product } from "../../mocks/product";
import { server } from "../../mocks/serverMockFetcher";
import { sortMock } from "../../mocks/sort";
import getProducts from "../../src/fetchers/getProducts";

describe("getProducts", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it("fetches products and returns the expected data", async () => {
    const searchQuery = "?query=query";

    const {
      query,
      paging,
      results,
      sortApi,
      available_sorts,
      filters,
      availableFilters,
    } = await getProducts(searchQuery);

    await waitFor(() => {
      expect(
        JSON.stringify({
          query,
          paging,
          results,
          sort: sortApi,
          available_sorts,
          filters,
          availableFilters,
        })
      ).toBe(
        JSON.stringify({
          query: "query",
          paging: { total: 10 },
          results: [product],
          sort: sortMock[0],
          available_sorts: availableSorts,
          filters,
          availableFilters,
        })
      );
    });
  });
});
