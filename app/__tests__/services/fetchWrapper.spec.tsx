import { render, screen } from "@testing-library/react";

import { server } from "../../mocks/serverMockWrapper";
import { fetchWrapper } from "../../src/services/fetchWrapper";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("fetchWrapper", () => {
  it("Requisition test", async () => {
    const response: { id: number; name: string } = await fetchWrapper("");

    render(<div data-testid="container-test">{response.name}</div>);

    expect(response).toEqual({
      id: 1,
      name: "João",
    });

    expect(screen.getByText(response.name)).toBeInTheDocument();
  });
});
