import { setIsSorterDropdownOpen } from "@/app/redux/Features/productsSlice";
import Sorter from "@/Components/Pages/Search/SorterComponents/Sorter";
import useProducts from "@/hooks/useProducts";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { sortMock } from "../../../../../../mocks/sort";

jest.mock("../../../../../../src/hooks/useProducts", () => {
  return jest.fn(() => ({
    isLoading: false,
  }));
});

jest.mock(
  "../../../../../../src/Components/Pages/Search/SorterComponents/DropdownSorter",
  () => {
    return jest.fn(() => <div data-testid="dropdown-sorter" />);
  }
);

const mockStore = configureStore([]);

describe("<Sorter />", () => {
  it("should render Sorter correctly", () => {
    const initialState = {
      products: {
        totalResults: 2,
        isSorterDropdownOpen: true,
        availableSorts: sortMock,
      },
    };

    const store = mockStore(initialState);
    store.dispatch = jest.fn();

    const { queryByTestId } = render(
      <Provider store={store}>
        <Sorter />
      </Provider>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    store.dispatch(setIsSorterDropdownOpen(false));

    expect(store.dispatch).toHaveBeenCalledWith(setIsSorterDropdownOpen(false));
    expect(queryByTestId("dropdown-sorter")).toBeInTheDocument();
    expect(queryByTestId("is-loading-container")).toBeNull();
    expect(queryByTestId("sorter-container")).toHaveClass("tablet:flex");
    expect(button).toBeInTheDocument();
  });

  it("when isLoading = true, should render isLoadingContainer component correctly", () => {
    (useProducts as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const initialState = {
      products: {
        totalResults: 2,
        isSorterDropdownOpen: true,
        availableSorts: sortMock,
      },
    };

    const store = mockStore(initialState);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Sorter />
      </Provider>
    );

    expect(queryByTestId("dropdown-sorter")).toBeNull();
    expect(queryByTestId("is-loading-container")).toBeInTheDocument();
  });

  it("when totalResults = 0, shouldn't render Sorter Container component", () => {
    (useProducts as jest.Mock).mockReturnValue({
      isLoading: false,
    });

    const initialState = {
      products: {
        totalResults: 0,
        isSorterDropdownOpen: true,
        availableSorts: sortMock,
      },
    };

    const store = mockStore(initialState);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Sorter />
      </Provider>
    );

    expect(queryByTestId("is-loading-container")).toBeNull();
    expect(queryByTestId("sorter-container")).toHaveClass("tablet:hidden");
  });
});
