import { rest } from "msw";
import { setupServer } from "msw/node";

import { serviceResponseMock } from "./serviceResponseMock";

export const server = setupServer(
  rest.get(`/api/products`, (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get("query");

    const mockApiResponse = {
      ...serviceResponseMock,
      query: searchQuery,
    };

    return res(ctx.json(mockApiResponse));
  })
);
