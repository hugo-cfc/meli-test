/* eslint-disable @typescript-eslint/no-unsafe-call */
import SearchBottomSheetLayout from "@/Components/Pages/Search/SearchBottomSheetLayout/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(() => {
    const params = new URLSearchParams("?modal-type=sort");
    return {
      get: params.get.bind(params),
    };
  }),
}));

jest.mock(
  "../../../../../src/Components/Pages/Search/SearchBottomSheetLayout/useSearchBottomSheetLayout",
  () => ({
    __esModule: true,
    default: jest.fn(() => ({
      handleCloseModal: jest.fn(),
    })),
  })
);

jest.mock("../../../../../src/hooks/reduxHooks/reduxHooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("<SearchBottomSheetLayout />", () => {
  it("should render the component correctly when modalType matches", () => {
    const initialState = {
      products: {
        search: true,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <div>
          <SearchBottomSheetLayout modalType="sort" title="Ordernar por">
            <div>tester div</div>
          </SearchBottomSheetLayout>
        </div>
      </Provider>
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const titleElement = screen.getByText("Ordernar por");
    expect(titleElement).toBeInTheDocument();

    const childrenElement = screen.getByText("tester div");
    expect(childrenElement).toBeInTheDocument();
  });

  it("shouldn't render the component when modalType don't match", () => {
    const initialState = {
      products: {
        search: true,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <div>
          <SearchBottomSheetLayout modalType="filters" title="Ordernar por">
            <div>tester div</div>
          </SearchBottomSheetLayout>
        </div>
      </Provider>
    );

    const container = screen.queryAllByTestId("item-component");
    expect(container).toStrictEqual([]);
  });
});
