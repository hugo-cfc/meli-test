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
          <div className="px-8 py-4">
            <button
              className="aspect-square w-9 py-1"
              onClick={handleCloseModal}
            >
              <ArrowLeft className="w-8 text-blueML" />
            </button>

            <h1 className="mt-10 text-3xl text-grayTextML">{title}</h1>
          </div>

          {children}
        </>
      )}
    </>
  );
};

export default SearchBottomSheetLayout;
