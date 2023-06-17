"use client";

import useFiltersMobileModal from "./useFiltersMobileModal";
import BottomSheet from "../../../BottomSheet";
import SearchBottomSheetLayout from "../SearchBottomSheetLayout";

const FiltersMobileModal = () => {
  const { handleClickOnFilterOption, availableFilters } =
    useFiltersMobileModal();

  return (
    <BottomSheet modalType="filter">
      <SearchBottomSheetLayout title="Filtrar por preço" modalType="filter">
        <div className="mt-10">
          {availableFilters?.values.map((filter) => (
            <button
              key={filter.id}
              className="text-blueML text-lg font-light antialiased px-8 py-5 w-full text-start flex items-center gap-x-2"
              onClick={() => handleClickOnFilterOption(filter.id)}
            >
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
