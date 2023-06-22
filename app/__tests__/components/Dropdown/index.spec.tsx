import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { setIsSorterDropdownOpen } from "../../../src/app/redux/Features/productsSlice";
import Dropdown from "../../../src/Components/Dropdown";

const mockStore = configureStore([]);

describe("<Dropdown />", () => {
  it("should render when isSorterDropdownOpen is true", () => {
    const initialState = {
      products: {
        isSorterDropdownOpen: true,
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Dropdown>Dropdown Content</Dropdown>
      </Provider>
    );

    expect(getByText("Dropdown Content")).toBeInTheDocument();
  });

  it("shouldn't render when isSorterDropdownOpen is false", () => {
    const initialState = {
      products: {
        isSorterDropdownOpen: false,
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Dropdown>Dropdown Content</Dropdown>
      </Provider>
    );

    expect(getByText("Dropdown Content")).toBeInTheDocument();
  });

  it("calls dispatch correctly when clicking on div overlay", () => {
    const initialState = {
      products: {
        isSorterDropdownOpen: true,
      },
    };
    const store = mockStore(initialState);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Dropdown>Conteúdo do Dropdown</Dropdown>
      </Provider>
    );

    const overlayDiv = screen.getByTestId("overlay-div");
    fireEvent.click(overlayDiv);

    store.dispatch(setIsSorterDropdownOpen(false));

    expect(store.dispatch).toHaveBeenCalledWith(setIsSorterDropdownOpen(false));
  });
});
