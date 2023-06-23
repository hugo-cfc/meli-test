import SearchDetails from "@/Components/Pages/Search/SearchDetails";
import { render, screen } from "@testing-library/react";

import { filters, filtersWithoutPrice } from "../../../../../mocks/filters";

jest.mock(
  "../../../../../src/Components/Pages/Search/FiltersComponents/FilterBadge",
  () => {
    return jest.fn(() => <div data-testid="filter-badge" />);
  }
);

describe("<SearchDetails />", () => {
  it("should render SearchDetails with FilterBadge correctly", () => {
    render(<SearchDetails search="teste" filters={filters} />);

    const container = screen.getByTestId("container");
    const searchTitle = screen.getByText("teste");
    const filterBadge = screen.getByTestId("filter-badge");

    expect(container).toBeInTheDocument();
    expect(searchTitle).toBeInTheDocument();
    expect(filterBadge).toBeInTheDocument();
  });

  it("should render SearchDetails without FilterBadge correctly", () => {
    render(<SearchDetails search="teste" filters={filtersWithoutPrice} />);

    const container = screen.getByTestId("container");
    const searchTitle = screen.getByText("teste");
    const filterBadge = screen.queryByTestId("filter-badge");

    expect(container).toBeInTheDocument();
    expect(searchTitle).toBeInTheDocument();
    expect(filterBadge).toBeNull();
  });

  it("should render SearchDetails without FilterBadge correctly", () => {
    render(<SearchDetails search="teste" filters={filtersWithoutPrice} />);

    const searchTitle = screen.getByText("teste");
    const filterBadge = screen.queryByTestId("filter-badge");

    expect(searchTitle).toBeInTheDocument();
    expect(filterBadge).toBeNull();
  });
});
