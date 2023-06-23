import { fireEvent, render, screen } from "@testing-library/react";

import Header from "../../../src/Components/Header";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/busca"),
  useRouter: jest.fn(() => "/busca?sort=relevance"),
}));

const setSearchMock = jest.fn();

jest.mock("../../../src/Components/Header/useHeader", () => {
  return jest.fn(() => ({
    setSearch: setSearchMock,
  }));
});

describe("<Header />", () => {
  it("should renders correctly", () => {
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

  it("should call setSearch when changing the value of the input", () => {
    render(<Header />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "50" } });

    expect(setSearchMock).toHaveBeenCalledWith("50");
  });
});
