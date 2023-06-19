"use client";

import { useSearchParams } from "next/navigation";

interface BottomSheetProps {
  modalType: string;
  children: React.ReactNode;
}

const BottomSheet = ({ modalType, children }: BottomSheetProps) => {
  const searchParams = useSearchParams();
  const currentModalType = searchParams.get("modal-type");

  return (
    <div
      className={`fixed left-0 z-50 h-screen w-screen bg-white transition-all ${
        currentModalType === modalType
          ? "top-0 animate-bottomModal "
          : "top-[101%] animate-bottomModalOut"
      } tablet:hidden`}
    >
      {children}
    </div>
  );
};

export default BottomSheet;
