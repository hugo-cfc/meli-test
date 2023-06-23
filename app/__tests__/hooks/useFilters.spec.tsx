import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { FormEvent } from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import urlGenerator from "../../src/functions/urlGenerator";
import useFilters from "../../src/hooks/useFilters";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => "relevance"),
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(() => ({
    replace: jest.fn(() => "busca"),
  })),
}));

const mockStore = configureStore([]);

const initialState = {
  products: {
    search: "search",
  },
};

const store = mockStore(initialState);

const wrapperReduxMock = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

describe("useFilters()", () => {
  it("handleClickOnFilterOption should generate URL and redirect via router.push ", () => {
    const { result } = renderHook(() => useFilters(), {
      wrapper: wrapperReduxMock,
    });
    const { handleClickOnFilterOption, router, searchParams } = result.current;

    const queryParams = new URLSearchParams(searchParams);

    const currentPrice = searchParams.get("price");

    render(
      <div
        onClick={() => act(() => handleClickOnFilterOption("3000.0-9500.0"))}
        data-testid="div-test"
      />
    );

    fireEvent.click(screen.getByTestId("div-test"));

    const generatedUrl = urlGenerator(
      { pathname: "search", api: false },
      {
        sort: currentPrice,
        price: "3000.0-9500.0",
      }
    );

    queryParams.set("modal-type", "sort");

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(router.push).toHaveBeenCalledWith(generatedUrl);
  });

  it("handleRemoveFilter should generate URL, remove price param and redirect via router.push ", () => {
    const { result } = renderHook(() => useFilters(), {
      wrapper: wrapperReduxMock,
    });
    const { handleRemoveFilter, router, searchParams } = result.current;

    const queryParams = new URLSearchParams(searchParams);

    const currentSort = searchParams.get("sort");

    render(
      <div
        onClick={() => act(() => handleRemoveFilter())}
        data-testid="div-test"
      />
    );

    fireEvent.click(screen.getByTestId("div-test"));

    queryParams.delete("price");

    const generatedUrl = urlGenerator(
      { pathname: "search", api: false },
      {
        sort: currentSort,
        price: "",
      }
    );

    queryParams.set("modal-type", "sort");

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(router.push).toHaveBeenCalledWith(generatedUrl);
  });

  it("handleSubmitManualFilterOption run preventDefault", () => {
    const { result } = renderHook(() => useFilters(), {
      wrapper: wrapperReduxMock,
    });
    const { handleSubmitManualFilterOption } = result.current;

    const mockPreventDefault = jest.fn();

    result.current.setMinValue = jest.fn();
    result.current.setMaxValue = jest.fn();
    result.current.handleClickOnFilterOption = jest.fn();

    const mockEvent = {
      preventDefault: mockPreventDefault,
    };

    act(() => {
      handleSubmitManualFilterOption(mockEvent as unknown as FormEvent);
    });

    expect(mockPreventDefault).toHaveBeenCalled();
  });
});
