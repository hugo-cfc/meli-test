import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import urlGenerator from "../../src/functions/urlGenerator";
import useSorters from "../../src/hooks/useSorters";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => "search"),
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

describe("useSorters()", () => {
  it("handleClickOnSortOption should generate URL and redirect via router.push ", () => {
    const { result } = renderHook(() => useSorters(), {
      wrapper: wrapperReduxMock,
    });
    const { handleClickOnSortOption, router, searchParams } = result.current;

    const queryParams = new URLSearchParams(searchParams);

    const currentPrice = searchParams.get("price");

    render(
      <div
        onClick={() => act(() => handleClickOnSortOption("relevance"))}
        data-testid="div-test"
      />
    );

    fireEvent.click(screen.getByTestId("div-test"));

    const generatedUrl = urlGenerator(
      { pathname: "search", api: false },
      {
        sort: "relevance",
        price: currentPrice,
      }
    );

    queryParams.set("modal-type", "sort");

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(router.push).toHaveBeenCalledWith(generatedUrl);
  });
});
