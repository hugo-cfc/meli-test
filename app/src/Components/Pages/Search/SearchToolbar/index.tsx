"use client";

import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import SorterMobileModal from "../SorterMobileModal";
import FiltersMobileModal from "../FiltersMobileModal";
import useSearchToolbar from "./useSearchToolbar";
import { useSearchContext } from "../../../../app/Context/searchContext";

const SearchToolbar = () => {
  const { handleOpenModal } = useSearchToolbar();
  const { availableFilters } = useSearchContext();

  return (
    <div className="bg-white w-screen h-12 mb-12 tablet:hidden flex">
      <button
        className="flex-1 flex items-center justify-center gap-x-2 text-blueML"
        onClick={() => handleOpenModal("sort")}
      >
        <ArrowDownUp className="w-4" />
        <span className="text-sm font-light">Ordenar</span>
      </button>

      <button
        className={`flex-1 flex items-center justify-center gap-x-2 text-blueML ${
          !availableFilters && "hidden"
        }`}
        onClick={() => handleOpenModal("filter")}
      >
        <SlidersHorizontal className="w-4" />
        <span className="text-sm font-light">Filtrar</span>
      </button>

      <SorterMobileModal />
      <FiltersMobileModal />
    </div>
  );
};

export default SearchToolbar;
