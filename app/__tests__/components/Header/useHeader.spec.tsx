/* eslint-disable @typescript-eslint/unbound-method */
import { act, fireEvent, render, renderHook } from "@testing-library/react";

import useHeader from "../../../src/Components/Header/useHeader";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => ""),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("useHeader()", () => {
  it("should call handleSubmit when submitting the search", () => {
    const { result } = renderHook(() => useHeader());

    const { getByTestId } = render(
      <form onSubmit={result.current.handleSubmit} data-testid="form-test">
        <button type="submit">Submit</button>
      </form>
    );

    const formElement = getByTestId("form-test");
    act(() => {
      fireEvent.submit(formElement);
    });

    expect(result.current.router.push).toHaveBeenCalledWith("/?sort=relevance");
  });

  it("handleClickLogo should redirect to home", () => {
    const { result } = renderHook(() => useHeader());

    const { getByRole } = render(
      <button onClick={result.current.handleClickLogo}>Submit</button>
    );

    act(() => {
      fireEvent.click(getByRole("button"));
    });

    expect(result.current.router.push).toHaveBeenCalledWith("/");
  });
});
