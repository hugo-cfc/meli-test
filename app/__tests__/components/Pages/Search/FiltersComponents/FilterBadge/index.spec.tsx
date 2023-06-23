import FilterBadge from "@/Components/Pages/Search/FiltersComponents/FilterBadge";
import { render, screen } from "@testing-library/react";

jest.mock("../../../../../../src/hooks/useFilters", () => {
  return jest.fn(() => ({
    handleRemoveFilter: jest.fn(),
  }));
});

describe("<FilterBadge />", () => {
  it("should renders correctly", () => {
    render(<FilterBadge title="Teste" />);

    const button = screen.getByText("Teste");
    expect(button).toBeInTheDocument();
    expect(button).not.toBeNull();
  });
});
