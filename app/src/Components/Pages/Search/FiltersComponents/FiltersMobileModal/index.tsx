"use client";

import BottomSheet from "../../../../BottomSheet";
import SearchBottomSheetLayout from "../../SearchBottomSheetLayout";
import { ChevronRight } from "lucide-react";
import Input from "../../../../Input";
import useFilters from "../../../../../hooks/useFilters";
import { useSearchContext } from "../../../../../app/Context/searchContext";

const FiltersMobileModal = () => {
  const { availableFilters } = useSearchContext();
  const {
    handleClickOnFilterOption,
    handleSubmitManualFilterOption,
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    isValidMinValue,
    isValidMaxValue,
  } = useFilters();

  return (
    <BottomSheet modalType="filter">
      <SearchBottomSheetLayout title="Filtrar por preço" modalType="filter">
        <div className="mt-10 px-8">
          {availableFilters?.values.map((filter) => (
            <button
              key={filter.id}
              className="text-blueML text-lg font-light antialiased py-5 w-full text-start flex items-center gap-x-2"
              onClick={() => handleClickOnFilterOption(filter.id)}
            >
              {filter.name}
              <span className="text-gray-400 text-sm">({filter.results})</span>
            </button>
          ))}

          <form
            className="mt-4 flex flex-1 gap-x-2 items-center"
            onSubmit={handleSubmitManualFilterOption}
          >
            <Input
              type="text"
              placeholder="Mínimo"
              error={isValidMinValue}
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              className="w-24 px-2 py-1 bg-white border-[1px] border-gray-400 rounded-md text-sm outline-0 focus:border-blueML focus:border-2"
            />

            <span>-</span>

            <Input
              type="text"
              placeholder="Máximo"
              error={isValidMaxValue}
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              className="w-24 px-2 py-1 bg-white border-[1px] border-gray-400 rounded-md text-sm outline-0 focus:border-blueML focus:border-2"
            />

            <button
              type="submit"
              className="bg-blueML rounded-[100%] flex items-center justify-center disabled:bg-grayML"
              onSubmit={(e) => handleSubmitManualFilterOption(e)}
              disabled={
                (minValue === "" && maxValue === "") ||
                isValidMinValue !== "" ||
                isValidMaxValue !== ""
              }
            >
              <ChevronRight className="w-6 text-white" />
            </button>
          </form>
        </div>
      </SearchBottomSheetLayout>
    </BottomSheet>
  );
};

export default FiltersMobileModal;
