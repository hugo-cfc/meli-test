import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import DropdownItem from "../../../../../../src/Components/Pages/Search/SorterComponents/DropdownItem";

const sorterMock = [
  {
    id: "relevance",
    name: "Relevancia",
  },

  {
    id: "asc",
    name: "Menor preço",
  },
];

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

describe("<DropdownItem/>", () => {
  it("should render correctly and with active indicator", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("relevance"),
    });

    render(
      <Provider store={store}>
        <DropdownItem item={sorterMock[0]} />
      </Provider>
    );

    const container = screen.getByTestId("container");
    const activeIndicator = screen.getByTestId("active-indicator");
    const button = screen.getByText(sorterMock[0].name);

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
        <DropdownItem item={sorterMock[1]} />
      </Provider>
    );

    const activeIndicator = screen.queryByTestId("active-indicator");
    const button = screen.getByText(sorterMock[1].name);

    expect(button).toHaveClass("text-grayTextML");
    expect(activeIndicator).toBeNull();
  });
});
