import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import {
  availableFilters,
  noFilters,
} from "../../../../../../mocks/availableFilters";
import { filters, filtersWithoutPrice } from "../../../../../../mocks/filters";
import FiltersMobileModal from "../../../../../../src/Components/Pages/Search/FiltersComponents/FiltersMobileModal";

const mockStore = configureStore([]);

jest.mock("../../../../../../src/hooks/useProducts", () => {
  return jest.fn(() => ({
    isLoading: false,
  }));
});

const handleClickOnFilterOptionMock = jest.fn();
const minValueMock = 0;
const maxValueMock = 100;
const setMinValueMock = jest.fn();
const setMaxValueMock = jest.fn();

jest.mock("../../../../../../src/hooks/useFilters", () => {
  return jest.fn(() => ({
    handleClickOnFilterOption: handleClickOnFilterOptionMock,
    handleSubmitManualFilterOption: jest.fn(),
    minValue: minValueMock,
    maxValue: maxValueMock,
    setMinValue: setMinValueMock,
    setMaxValue: setMaxValueMock,
    isNotAvailableToSubmit: false,
    isValidValue: jest.fn(() => false),
  }));
});

jest.mock("../../../../../../src/Components/BottomSheet", () => {
  return jest.fn(({ children }: { children: React.ReactNode }) => (
    <div data-testid="bottom-sheet">{children}</div>
  ));
});

jest.mock(
  "../../../../../../src/Components/Pages/Search/SearchBottomSheetLayout",
  () => {
    return jest.fn(({ children }: { children: React.ReactNode }) => (
      <div data-testid="search-bottom-sheet-layout">{children}</div>
    ));
  }
);

describe("<FiltersMobileModal />", () => {
  it("should render FiltersMobileModal correctly", () => {
    const initialState = {
      products: {
        totalResults: 2,
        availableFilters,
        filters,
        search: "test",
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <FiltersMobileModal />
      </Provider>
    );

    const container = screen.getByTestId("container");
    const filterOptionButton = screen.getByTestId("filter-option-button");
    const totalResultsSpan = screen.getByTestId("total-results-by-filter");
    const form = screen.getByTestId("filter-form");
    const inputMinValue = screen.getByTestId("input-min-value");
    const inputMaxValue = screen.getByTestId("input-max-value");
    const button = screen.getByTestId("submit-button");
    const iconButton = screen.getByTestId("icon-submit-button");

    expect(container).toBeInTheDocument();
    expect(filterOptionButton).toBeInTheDocument();
    expect(totalResultsSpan).toBeInTheDocument();
    expect(totalResultsSpan).toHaveTextContent(
      `${initialState.products.availableFilters.values[0].results}`
    );
    expect(form).toBeInTheDocument();
    expect(inputMinValue).toBeInTheDocument();
    expect(inputMaxValue).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(iconButton).toBeInTheDocument();
  });

  it("shouldn't render filterOptionButton when totalResults = 0", () => {
    const initialState = {
      products: {
        totalResults: 0,
        availableFilters: noFilters,
        filters,
        search: "test",
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <FiltersMobileModal />
      </Provider>
    );

    const filterOptionButton = screen.queryByTestId("filter-option-button");

    expect(filterOptionButton).toBeNull();
  });

  it("should call handleClickOnFilterOption function when filter is clicked", () => {
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
        <FiltersMobileModal />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("filter-option-button"));

    expect(handleClickOnFilterOptionMock).toHaveBeenCalledWith(
      availableFilters.values[0].id
    );
  });

  it("should call setMinValue and setMaxValue when changing the value of the respective inputs", () => {
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
        <FiltersMobileModal />
      </Provider>
    );

    const inputMinValue = screen.getByTestId("input-min-value");
    const inputMaxValue = screen.getByTestId("input-max-value");

    fireEvent.change(inputMinValue, { target: { value: "50" } });
    fireEvent.change(inputMaxValue, { target: { value: "150" } });

    expect(setMinValueMock).toHaveBeenCalledWith("50");
    expect(setMaxValueMock).toHaveBeenCalledWith("150");
  });

  it("should render button disable when values aren't valid", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useFiltersMock = require("../../../../../../src/hooks/useFilters");

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    useFiltersMock.mockReturnValue({
      handleClickOnFilterOption: handleClickOnFilterOptionMock,
      handleSubmitManualFilterOption: jest.fn(),
      minValue: "0",
      maxValue: "100",
      setMinValue: setMinValueMock,
      setMaxValue: setMaxValueMock,
      isNotAvailableToSubmit: true,
      isValidValue: jest.fn(() => false),
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

    render(
      <Provider store={store}>
        <FiltersMobileModal />
      </Provider>
    );

    const submitButton = screen.getByTestId("submit-button");

    expect(submitButton).toBeDisabled();
  });
});
