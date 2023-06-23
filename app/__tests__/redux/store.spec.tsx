import { store } from "@/app/redux/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { availableFilters } from "../../mocks/availableFilters";
import { availableSorts } from "../../mocks/availableSorts";
import { filters } from "../../mocks/filters";
import { product } from "../../mocks/product";
import ReduxTesterComponent from "../../mocks/ReduxTesterComponent";
import { sortMock } from "../../mocks/sort";

describe("Products Redux Store", () => {
  it("should returns Products Redux store initialState with correct values", () => {
    render(
      <Provider store={store}>
        <div />
      </Provider>
    );

    expect(store.getState().products.totalResults).toBe(0);
    expect(store.getState().products.products).toEqual([]);
    expect(store.getState().products.isSorterDropdownOpen).toBe(false);
    expect(store.getState().products.search).toEqual("");
    expect(store.getState().products.availableSorts).toEqual([]);
    expect(store.getState().products.sort).toEqual(null);
    expect(store.getState().products.availableFilters).toEqual(null);
    expect(store.getState().products.filters).toEqual(null);
  });

  it("All dispatchers must set sent values", () => {
    render(
      <Provider store={store}>
        <ReduxTesterComponent />
      </Provider>
    );

    fireEvent.click(screen.getByText("totalResults"));
    expect(store.getState().products.totalResults).toBe(2);

    fireEvent.click(screen.getByText("products"));
    expect(store.getState().products.products).toEqual([product]);

    fireEvent.click(screen.getByText("isSorterDropdownOpen"));
    expect(store.getState().products.isSorterDropdownOpen).toBe(true);

    fireEvent.click(screen.getByText("search"));
    expect(store.getState().products.search).toEqual("test");

    fireEvent.click(screen.getByText("availableSorts"));
    expect(store.getState().products.availableSorts).toEqual(availableSorts);

    fireEvent.click(screen.getByText("sort"));
    expect(store.getState().products.sort).toEqual(sortMock[0]);

    fireEvent.click(screen.getByText("availableFilters"));
    expect(store.getState().products.availableFilters).toEqual(
      availableFilters
    );

    fireEvent.click(screen.getByText("filters"));
    expect(store.getState().products.filters).toEqual(filters);
  });
});
