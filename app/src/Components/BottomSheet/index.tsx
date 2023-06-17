"use client";

import { useSearchParams } from "next/navigation";

interface BottomSheetProps {
  name: string;
  children: React.ReactNode;
}

const BottomSheet = ({ name, children }: BottomSheetProps) => {
  const searchParams = useSearchParams();
  const modalType = searchParams.get("modal-type");

  return (
    <div
      className={`fixed z-50 left-0 w-screen h-screen bg-white transition-all ${
        modalType === name
          ? "animate-bottomModal top-0 "
          : "animate-bottomModalOut top-[101%]"
      } tablet:hidden`}
    >
      {children}
    </div>
  );
};

export default BottomSheet;
