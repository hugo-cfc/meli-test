import { rest } from "msw";
import { setupServer } from "msw/node";

export const server = setupServer(
  rest.get(`/undefined&limit=10`, (req, res, ctx) => {
    const fakeResponse = {
      id: 1,
      name: "João",
    };

    return res(ctx.json(fakeResponse));
  })
);
