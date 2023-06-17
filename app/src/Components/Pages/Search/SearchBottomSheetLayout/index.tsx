"use client";

import { ArrowLeft } from "lucide-react";
import useSearchBottomSheetLayout from "./useSearchBottomSheetLayout";
import { useSearchParams } from "next/navigation";

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
          <div className="py-4 px-8">
            <button
              className="w-9 py-1 aspect-square"
              onClick={handleCloseModal}
            >
              <ArrowLeft className="text-blueML w-8" />
            </button>

            <h1 className="text-grayTextML text-3xl mt-10">{title}</h1>
          </div>

          {children}
        </>
      )}
    </>
  );
};

export default SearchBottomSheetLayout;
