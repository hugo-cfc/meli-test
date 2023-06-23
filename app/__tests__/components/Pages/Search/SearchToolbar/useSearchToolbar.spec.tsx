import useSearchToolbar from "@/Components/Pages/Search/SearchToolbar/useSearchToolbar";
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => "teste=12"),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  usePathname: jest.fn(() => ({
    replace: jest.fn(() => "busca"),
  })),
}));

describe("useSearchToolbar()", () => {
  it("should return right values", () => {
    const { result } = renderHook(() => useSearchToolbar());

    expect(typeof result.current.handleOpenModal).toBe("function");
    expect(typeof result.current.pathname).toBe("string");
    expect(Array.isArray(result.current.toolbarOptions)).toBe(true);
    expect(result.current.toolbarOptions.length).toBe(2);
  });

  it("handleOpenModal correctly updates URL parameters", () => {
    const { result } = renderHook(() => useSearchToolbar());
    const { handleOpenModal, router, pathname, searchParams } = result.current;

    const queryParams = new URLSearchParams(searchParams);

    render(
      <div
        onClick={() => act(() => handleOpenModal("sort"))}
        data-testid="div-test"
      />
    );

    fireEvent.click(screen.getByTestId("div-test"));

    queryParams.set("modal-type", "sort");

    const params = queryParams.toString();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(router.push).toHaveBeenCalledWith(`/${pathname}?${params}`, {
      shallow: true,
    });
  });
});
