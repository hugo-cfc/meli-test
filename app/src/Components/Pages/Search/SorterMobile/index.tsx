"use client";

import { ArrowDownUp } from "lucide-react";
import ModalSorter from "../ModalSorter";
import { useGlobalContext } from "../../../../app/Context/searchContext";

const SorterMobile = () => {
  const { setIsSorterModalOpen } = useGlobalContext();
  return (
    <div className="bg-white w-screen h-12 tablet:hidden flex">
      <button
        className="flex-1 flex items-center justify-center gap-x-2 text-blueML"
        onClick={() => setIsSorterModalOpen(true)}
      >
        <ArrowDownUp className="w-4" />
        <span className="text-sm font-light">Ordenar</span>
      </button>

      <ModalSorter />
    </div>
  );
};

export default SorterMobile;
