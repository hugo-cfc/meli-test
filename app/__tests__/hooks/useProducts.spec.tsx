/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ProductState,
  setAvailableFilters,
  setAvailableSorts,
  setFilters,
  setSearch,
  setSort,
  setTotalResults,
} from "@/app/redux/Features/productsSlice";
import useProducts from "@/hooks/useProducts";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { server } from "../../mocks/serverMockFetcher";
import { serviceResponseMock } from "../../mocks/serviceResponseMock";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => ({
    replace: jest.fn(() => "busca"),
  })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => "relevance"),
  })),
}));

const enqueueSnackbarMock = jest.fn();
jest.mock("notistack", () => ({
  useSnackbar: jest.fn(() => ({
    enqueueSnackbar: enqueueSnackbarMock,
  })),
}));

jest.mock("../../src/app/redux/Features/productsSlice", () => ({
  setSearch: jest.fn(),
  setProducts: jest.fn(),
  setTotalResults: jest.fn(),
  setSort: jest.fn(),
  setAvailableSorts: jest.fn(),
  setAvailableFilters: jest.fn(),
  setFilters: jest.fn(),
}));

const mockStore = configureStore([]);

const initialState: ProductState = {
  totalResults: 0,
  products: [],
  isSorterDropdownOpen: false,
  search: "",
  availableSorts: [],
  sort: null,
  availableFilters: null,
  filters: null,
};

const store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapperReduxMock = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

describe("useProducts()", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it("should return isLoading === true at start", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: wrapperReduxMock,
    });
    const { isLoading } = result.current;

    await waitForNextUpdate();

    expect(isLoading).toBe(true);
  });

  it("should call dispatch functions correctly", async () => {
    const { waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: wrapperReduxMock,
    });
    const dispatchSpy = jest.spyOn(store, "dispatch");

    const formattedPathname = "/products";
    const generatedUrl = "/api/products";

    jest.mock("next/navigation", () => ({
      usePathname: jest.fn(() => formattedPathname),
      useSearchParams: jest.fn(() => ({
        get: jest.fn(),
      })),
    }));

    const getProductsMock = jest.fn().mockResolvedValue(serviceResponseMock);

    jest.mock("../../src/fetchers/getProducts", () => ({
      default: getProductsMock,
    }));

    jest.mock("../../src/functions/urlGenerator", () =>
      jest.fn(() => generatedUrl)
    );

    await waitForNextUpdate();

    expect(dispatchSpy).toHaveBeenCalledWith(setSearch(formattedPathname));
    expect(dispatchSpy).toHaveBeenCalledWith(
      setTotalResults(serviceResponseMock.paging.total)
    );
    expect(dispatchSpy).toHaveBeenCalledWith(setSort(serviceResponseMock.sort));
    expect(dispatchSpy).toHaveBeenCalledWith(
      setAvailableSorts(serviceResponseMock.available_sorts)
    );
    expect(dispatchSpy).toHaveBeenCalledWith(
      setAvailableFilters(serviceResponseMock.availableFilters)
    );
    expect(dispatchSpy).toHaveBeenCalledWith(
      setFilters(serviceResponseMock.filters)
    );
  });
});
