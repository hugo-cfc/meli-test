import { render, screen } from "@testing-library/react";

import { server } from "../../mocks/serverMock";
import { fetchAppApi } from "../../src/services/fetchAppApi";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("fetchAppApi", () => {
  it("Requisition test", async () => {
    const response: { id: number; name: string } = await fetchAppApi("-test");

    render(<div data-testid="container-test">{response.name}</div>);

    expect(response).toEqual({
      id: 1,
      name: "João",
    });

    expect(screen.getByText(response.name)).toBeInTheDocument();
  });
});
