import DropdownItem from "@/Components/Pages/Search/SorterComponents/DropdownItem";
import { fireEvent, render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { sortMock } from "../../../../../../mocks/sort";

const mockStore = configureStore([]);

const initialState = {
  products: {
    search: "search",
  },
};

const store = mockStore(initialState);

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

const handleClickOnSortOptionMock = jest.fn();

jest.mock("../../../../../../src/hooks/useSorters", () => {
  return jest.fn(() => ({
    handleClickOnSortOption: handleClickOnSortOptionMock,
  }));
});

describe("<DropdownItem />", () => {
  it("should render correctly and with active indicator", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("relevance"),
    });

    render(
      <Provider store={store}>
        <DropdownItem item={sortMock[0]} />
      </Provider>
    );

    const container = screen.getByTestId("container");
    const activeIndicator = screen.getByTestId("active-indicator");
    const button = screen.getByText(sortMock[0].name);

    expect(container).toBeInTheDocument();
    expect(activeIndicator).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-blueML");
  });

  it("should render correctly without active indicator", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("relevance"),
    });

    render(
      <Provider store={store}>
        <DropdownItem item={sortMock[1]} />
      </Provider>
    );

    const activeIndicator = screen.queryByTestId("active-indicator");
    const button = screen.getByText(sortMock[1].name);

    expect(button).toHaveClass("text-grayTextML");
    expect(activeIndicator).toBeNull();
  });

  it("should call handleClickOnFilterOption function when filter is clicked", () => {
    render(
      <Provider store={store}>
        <DropdownItem item={sortMock[1]} />
      </Provider>
    );

    const button = screen.getByText(sortMock[1].name);

    fireEvent.click(button);

    expect(handleClickOnSortOptionMock).toHaveBeenCalledWith(sortMock[1].id);
  });
});
