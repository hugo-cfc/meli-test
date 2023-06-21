"use client";

import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

import useSearchBottomSheetLayout from "./useSearchBottomSheetLayout";

interface SearchBottomSheetLayoutProps {
  modalType: string;
  title: string;
  children: React.ReactNode;
}

const SearchBottomSheetLayout = ({
  modalType,
  title,
  children,
}: SearchBottomSheetLayoutProps) => {
  const { handleCloseModal } = useSearchBottomSheetLayout();
  const searchParams = useSearchParams();

  const currentModalType = searchParams.get("modal-type");

  return (
    <>
      {currentModalType === modalType && (
        <>
          <div className="px-8 py-4" data-testid="item-component">
            <button
              className="aspect-square w-9 py-1"
              onClick={handleCloseModal}
              data-testid="item-component"
            >
              <ArrowLeft
                className="w-8 text-blueML"
                data-testid="item-component"
              />
            </button>

            <h1 className="mt-10 text-3xl text-grayTextML" data-testid="title">
              {title}
            </h1>
          </div>

          {children}
        </>
      )}
    </>
  );
};

export default SearchBottomSheetLayout;
