import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders the default Next.js page", () => {
    // render(<Home />);

    const logo = screen.getByRole("img", {
      name: /Vercel Logo/i,
    });

    expect(logo).toBeInTheDocument();
  });
});
