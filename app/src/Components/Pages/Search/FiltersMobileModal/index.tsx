"use client";

import useFiltersMobileModal from "./useFiltersMobileModal";
import { useSearchContext } from "../../../../app/Context/searchContext";
import BottomSheet from "../../../BottomSheet";
import SearchBottomSheetLayout from "../SearchBottomSheetLayout";

const FiltersMobileModal = () => {
  const { handleClickOnFilterOption, priceFilters } = useFiltersMobileModal();
  const { filter: currentFilter } = useSearchContext();

  return (
    <BottomSheet modalType="filter">
      <SearchBottomSheetLayout title="Filtrar por preço" modalType="filter">
        <div className="mt-10">
          {priceFilters?.values.map((filter) => (
            <button
              key={filter.id}
              className="text-blueML text-lg font-light antialiased px-8 py-5 w-full text-start flex items-center gap-x-2"
              onClick={() => handleClickOnFilterOption(filter.id)}
            >
              {currentFilter?.values[0].id === filter.id && (
                <hr className="absolute left-0.5 top-0 w-1.5 h-full bg-blueML" />
              )}
              {filter.name}
              <span className="text-gray-400 text-sm">({filter.results})</span>
            </button>
          ))}
        </div>
      </SearchBottomSheetLayout>
    </BottomSheet>
  );
};

export default FiltersMobileModal;
