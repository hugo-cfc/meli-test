import { render, screen } from "@testing-library/react";

import EmptySearch from "../../../src/Components/EmptySearch";

describe("<EmptySearch />", () => {
  it("should render image with alt equal to description", () => {
    const description = "Nenhum resultado";

    render(<EmptySearch description={description} />);

    expect(screen.getByAltText(description)).toBeInTheDocument();
  });

  it("should render component with title below image", () => {
    const description = "Nenhum resultado";

    render(<EmptySearch description={description} />);

    const h1Description = screen.getByTestId("h1-description");

    expect(h1Description).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
