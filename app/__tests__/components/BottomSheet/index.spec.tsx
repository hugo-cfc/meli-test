import BottomSheet from "@/Components/BottomSheet";
import { render } from "@testing-library/react";
import { useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("<BottomSheet />", () => {
  it("should render BottomSheet when modalType matches", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("sort"),
    });

    const { getByText } = render(
      <BottomSheet modalType="sort">BottomSheet Content</BottomSheet>
    );

    expect(getByText("BottomSheet Content")).toBeInTheDocument();
  });

  it("shouldn't render BottomSheet when modalType doesn't match", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue("filter"),
    });

    const { queryByTestId } = render(
      <BottomSheet modalType="sort" data-testid="bottomsheet">
        BottomSheet Content
      </BottomSheet>
    );

    expect(queryByTestId("BottomSheet Content")).not.toBeInTheDocument();
  });
});
