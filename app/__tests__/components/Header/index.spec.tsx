import { render, screen } from "@testing-library/react";

import Header from "../../../src/Components/Header";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/busca"),
  useRouter: jest.fn(() => "/busca?sort=relevance"),
}));

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(<Header />);

    const header = screen.getByTestId("header-container");
    const mercadoLivreLogo = screen.getByAltText("Mercado Livre");
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(header).toBeInTheDocument();
    expect(mercadoLivreLogo).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
