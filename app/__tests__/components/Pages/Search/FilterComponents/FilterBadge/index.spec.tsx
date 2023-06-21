import { render, screen } from "@testing-library/react";

import FilterBadge from "../../../../../../src/Components/Pages/Search/FiltersComponents/FilterBadge";

describe("<FilterBadge />", () => {
  it("should renders correctly", () => {
    render(<FilterBadge title="Teste" />);

    const button = screen.getByText("Teste");
    expect(button).toBeInTheDocument();
  });
});
