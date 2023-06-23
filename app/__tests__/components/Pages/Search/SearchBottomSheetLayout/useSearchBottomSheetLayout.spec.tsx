/* eslint-disable @typescript-eslint/unbound-method */
import useSearchBottomSheetLayout from "@/Components/Pages/Search/SearchBottomSheetLayout/useSearchBottomSheetLayout";
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => "teste=12"),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

const mockStore = configureStore([]);

const initialState = {
  products: {
    search: "search",
  },
};

const store = mockStore(initialState);

const wrapperReduxMock = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

describe("useSearchBottomSheetLayout()", () => {
  it("should call handleCloseModal and redirect to obtained url", () => {
    (useSearchParams as jest.Mock).mockReturnValue("teste=12");

    const { result } = renderHook(() => useSearchBottomSheetLayout(), {
      wrapper: wrapperReduxMock,
    });

    render(
      <div onClick={result.current.handleCloseModal} data-testid="modal-test">
        <h1>Content Modal</h1>
      </div>
    );

    const modal = screen.getByTestId("modal-test");

    act(() => {
      fireEvent.click(modal);
    });

    expect(result.current.router.push).toHaveBeenCalledWith(
      `/${initialState.products.search}?teste=12`,
      { shallow: true }
    );
  });
});
