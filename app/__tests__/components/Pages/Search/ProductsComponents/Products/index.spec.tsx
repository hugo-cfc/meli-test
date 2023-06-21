import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { product } from "../../../../../../mocks/product";
import Products from "../../../../../../src/Components/Pages/Search/ProductsComponents/Products";
import useProducts from "../../../../../../src/hooks/useProducts";

jest.mock("../../../../../../src/hooks/useProducts", () => {
  return jest.fn(() => ({
    isLoading: false,
  }));
});

jest.mock("../../../../../../src/Components/EmptySearch", () => {
  return jest.fn(() => <div data-testid="empty-search" />);
});

const mockStore = configureStore([]);

describe("<Products />", () => {
  it("should render Products correctly", () => {
    const initialState = {
      products: {
        products: [product],
      },
    };

    const store = mockStore(initialState);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(queryByTestId("products-section")).toBeInTheDocument();
    expect(queryByTestId("skeleton")).toBeNull();
    expect(queryByTestId("empty-search")).toBeNull();
  });

  it("when products.length = 0, should render EmptySearch component", () => {
    const initialState = {
      products: {
        products: [],
      },
    };

    const store = mockStore(initialState);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(queryByTestId("products-section")).toBeNull();
    expect(queryByTestId("skeleton")).toBeNull();
    expect(queryByTestId("empty-search")).toBeInTheDocument();
  });

  it("when isLoading = true, should render Skeleton component", () => {
    (useProducts as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const initialState = {
      products: {
        products: [],
      },
    };

    const store = mockStore(initialState);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(queryByTestId("skeleton")).toBeInTheDocument();
    expect(queryByTestId("products-section")).toBeNull();
    expect(queryByTestId("empty-search")).toBeNull();
  });
});
