import SearchToolbar from "@/Components/Pages/Search/SearchToolbar";
import useProducts from "@/hooks/useProducts";
import { fireEvent, render, screen } from "@testing-library/react";
import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { availableFilters } from "../../../../../mocks/availableFilters";
import { filters } from "../../../../../mocks/filters";

const toolbarOptions = [
  {
    type: "sort",
    icon: <ArrowDownUp className="w-4" />,
    title: "Ordenar",
  },
  {
    type: "filter",
    icon: <SlidersHorizontal className="w-4" />,
    title: "Filtrar",
  },
];

jest.mock("../../../../../src/hooks/useProducts", () => {
  return jest.fn(() => ({
    isLoading: false,
  }));
});

const handleOpenModalMock = jest.fn();

jest.mock(
  "../../../../../src/Components/Pages/Search/SearchToolbar/useSearchToolbar",
  () => {
    return jest.fn(() => ({
      handleOpenModal: handleOpenModalMock,
      pathname: "search",
      toolbarOptions,
    }));
  }
);

jest.mock(
  "../../../../../src/Components/Pages/Search/SorterComponents/SorterMobileModal",
  () => {
    return jest.fn(() => <div data-testid="sorter-mobile-modal"></div>);
  }
);

jest.mock(
  "../../../../../src/Components/Pages/Search/FiltersComponents/FiltersMobileModal",
  () => {
    return jest.fn(() => <div data-testid="filters-mobile-modal"></div>);
  }
);

jest.mock("../../../../../src/Components/Pages/Search/SearchDetails", () => {
  return jest.fn(() => <div data-testid="search-details"></div>);
});

const mockStore = configureStore([]);

describe("<SearchToolbar />", () => {
  it("should render SearchToolbar correctly", () => {
    const initialState = {
      products: {
        totalResults: 2,
        availableFilters,
        filters,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SearchToolbar />
      </Provider>
    );
    const filterButton = screen.getByText("Ordenar");
    const sortButton = screen.getByText("Filtrar");

    expect(screen.queryByTestId("nav-loading")).toBeNull();
    expect(screen.getByTestId("nav-is-not-loading")).toBeInTheDocument();
    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
    expect(sortButton).toBeInTheDocument();
    expect(screen.getByTestId("sorter-mobile-modal")).toBeInTheDocument();
    expect(screen.getByTestId("filters-mobile-modal")).toBeInTheDocument();
    expect(screen.getByTestId("search-details")).toBeInTheDocument();
  });

  it("should render SearchToolbar with hidden when totalResults === 0", () => {
    const initialState = {
      products: {
        totalResults: 0,
        availableFilters,
        filters,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SearchToolbar />
      </Provider>
    );

    expect(screen.queryByTestId("nav-loading")).toBeNull();
    expect(screen.getByTestId("nav-is-not-loading")).toBeInTheDocument();
    expect(screen.getByTestId("nav-is-not-loading")).toHaveClass("hidden");
  });

  it("shouldn't show filter option button when have no available filters", () => {
    const initialState = {
      products: {
        totalResults: 0,
        availableFilters: null,
        filters,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SearchToolbar />
      </Provider>
    );

    const filterButton = screen.queryByTestId(`button-option-filter`);

    expect(filterButton).toHaveClass("hidden");
  });

  it("Button must call handleOpenModal when optionButton is clicked", () => {
    const initialState = {
      products: {
        totalResults: 2,
        availableFilters,
        filters,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SearchToolbar />
      </Provider>
    );

    const filterButton = screen.getByTestId(`button-option-filter`);
    fireEvent.click(filterButton);

    expect(handleOpenModalMock).toHaveBeenCalledWith("filter");
  });

  it("should render nav-loading when isLoading === true", () => {
    (useProducts as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const initialState = {
      products: {
        totalResults: 2,
        availableFilters,
        filters,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SearchToolbar />
      </Provider>
    );

    const navLoading = screen.getByTestId(`nav-loading`);
    const navIsNotLoading = screen.queryByTestId(`nav-is-not-loading`);

    expect(navLoading).toBeInTheDocument();
    expect(navIsNotLoading).toBeNull();
  });
});
