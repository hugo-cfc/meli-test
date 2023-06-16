"use client";

import { ChevronDown } from "lucide-react";
import ModalSorter from "../ModalSorter";
import { useSearchContext } from "../../../../app/Context/searchContext";

const SorterMobile = () => {
  const { setIsSorterModalOpen, sort } = useSearchContext();

  return (
    <div className="hidden tablet:flex mt-12 mb-4 w-full justify-end items-center gap-x-1.5">
      <span className="text-grayTextML text-sm">Ordernar por</span>
      <button
        className="flex items-center justify-center gap-x-1 transition-all hover:text-blueML"
        onClick={() => setIsSorterModalOpen(true)}
      >
        <span className="text-sm font-light">{sort?.name}</span>
        <ChevronDown className="w-4 text-blueML" />
      </button>

      <ModalSorter />
    </div>
  );
};

export default SorterMobile;
