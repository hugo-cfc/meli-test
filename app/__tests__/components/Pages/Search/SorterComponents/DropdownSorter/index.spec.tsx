import DropdownSorter from "@/Components/Pages/Search/SorterComponents/DropdownSorter";
import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { sortMock } from "../../../../../../mocks/sort";

const mockStore = configureStore([]);

const initialState = {
  products: {
    availableSorts: sortMock,
    isSorterDropdownOpen: true,
  },
};

const store = mockStore(initialState);

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("<DropdownSorter />", () => {
  it("should render DropdownSorter correctly", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("relevance"),
    });

    render(
      <Provider store={store}>
        <DropdownSorter />
      </Provider>
    );

    const dropdown = screen.getByTestId("overlay-div");
    const dropdownItem = screen.getAllByTestId("container");

    expect(dropdown).toBeInTheDocument();
    expect(dropdownItem[0]).toBeInTheDocument();
  });
});
