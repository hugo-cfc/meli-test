import Input from "@/Components/Input/index";
import { render, screen } from "@testing-library/react";

describe("<Input />", () => {
  it("passes additional props to the input element", () => {
    const placeholder = "Enter your name";

    render(<Input placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute(
      "placeholder",
      placeholder
    );
  });

  it("displays the error message when error prop is provided", () => {
    const errorMessage = "Invalid input";

    render(<Input error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeVisible();
  });

  it("does not display the error message when no error prop is provided", () => {
    render(<Input />);

    expect(screen.queryByText("Invalid input")).toBeNull();
  });
});
