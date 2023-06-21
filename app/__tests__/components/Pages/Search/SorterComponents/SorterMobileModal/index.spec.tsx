import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { sortMock } from "../../../../../../mocks/sort";
import SorterMobileModal from "../../../../../../src/Components/Pages/Search/SorterComponents/SorterMobileModal";

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

describe("<SorterMobileModal />", () => {
  it("should render correctly", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("sort"),
    });

    render(
      <Provider store={store}>
        <SorterMobileModal />
      </Provider>
    );

    const container = screen.getByTestId("container-ul-sorter");
    const button = screen.getByText(sortMock[0].name);

    expect(container).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
