import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { availableFilters } from "../../../../../../mocks/availableFilters";
import { filters, filtersWithoutPrice } from "../../../../../../mocks/filters";
import Filters from "../../../../../../src/Components/Pages/Search/FiltersComponents/Filters";
import useProducts from "../../../../../../src/hooks/useProducts";

const mockStore = configureStore([]);

jest.mock("../../../../../../src/hooks/useProducts", () => {
  return jest.fn(() => ({
    isLoading: false,
  }));
});

jest.mock("../../../../../../src/hooks/useFilters", () => {
  return jest.fn(() => ({
    handleClickOnFilterOption: jest.fn(),
    handleSubmitManualFilterOption: jest.fn(),
    minValue: 0,
    maxValue: 100,
    setMinValue: jest.fn(),
    setMaxValue: jest.fn(),
    isNotAvailableToSubmit: false,
    isValidValue: jest.fn(() => false),
  }));
});

jest.mock(
  "../../../../../../src/Components/Pages/Search/FiltersComponents/FilterBadge",
  () => {
    return jest.fn(() => <div data-testid="filter-bagde" />);
  }
);

describe("<Filters />", () => {
  it("should render Filters correctly", () => {
    const initialState = {
      products: {
        totalResults: 2,
        availableFilters,
        filters,
        search: "test",
      },
    };

    const store = mockStore(initialState);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const asideContainer = screen.getByRole("complementary");
    const searchTitle = screen.getByText(initialState.products.search);
    const totalResultsLegend = screen.getByTestId("total-results-legend");
    const filterBadge = screen.queryByTestId("filter-bagde");
    const filterItem = screen.getByTestId("filter-li");
    const filterResults = screen.getByTestId("filter-results");
    const form = screen.getByTestId("form");
    const button = screen.getByTestId("submit-button");
    const iconButton = screen.getByTestId("icon-submit-button");

    expect(asideContainer).toBeInTheDocument();
    expect(asideContainer).toHaveClass("tablet:flex");
    expect(searchTitle).toBeInTheDocument();
    expect(totalResultsLegend).toBeInTheDocument();
    expect(totalResultsLegend).toHaveTextContent(
      `${initialState.products.totalResults} resultados`
    );
    expect(filterItem).toBeInTheDocument();
    expect(filterResults).toBeInTheDocument();
    expect(filterBadge).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(iconButton).toBeInTheDocument();

    expect(queryByTestId("skeleton")).toBeNull();

    expect(searchTitle).toHaveTextContent(initialState.products.search);
    expect(button).toContainElement(iconButton);
  });

  it("when totalResults = 0, should render Filters with class: tablet:hidden", () => {
    const initialState = {
      products: {
        totalResults: 0,
        availableFilters,
        filters,
        search: "test",
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const asideContainer = screen.queryByRole("complementary");

    expect(asideContainer).toHaveClass("tablet:hidden");
  });

  it("when totalResults === 1, totalResultsLegend should display 'result'", () => {
    const initialState = {
      products: {
        totalResults: 1,
        availableFilters,
        filters,
        search: "test",
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const totalResultsLegend = screen.getByTestId("total-results-legend");

    expect(totalResultsLegend).toHaveTextContent(
      `${initialState.products.totalResults} resultado`
    );
  });

  it("when there aren't price filters, FilterBadge shouldn't render", () => {
    const initialState = {
      products: {
        totalResults: 1,
        availableFilters,
        filters: filtersWithoutPrice,
        search: "test",
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const filterBadge = screen.queryByTestId("filter-bagde");

    expect(filterBadge).toBeNull();
  });

  it("when isLoading = true, Skeleton should render", () => {
    (useProducts as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const initialState = {
      products: {
        totalResults: 1,
        availableFilters,
        filters: filtersWithoutPrice,
        search: "test",
      },
    };

    const store = mockStore(initialState);

    const { queryByTestId } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    const asideContainer = screen.queryByRole("complementary");

    expect(queryByTestId("skeleton")).toBeInTheDocument();
    expect(asideContainer).toBeNull();
  });
});
