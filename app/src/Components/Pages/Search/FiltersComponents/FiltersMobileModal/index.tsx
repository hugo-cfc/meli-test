"use client";

import BottomSheet from "../../../../BottomSheet";
import SearchBottomSheetLayout from "../../SearchBottomSheetLayout";
import { ChevronRight } from "lucide-react";
import Input from "../../../../Input";
import useFilters from "../../../../../hooks/useFilters";
import { RootState } from "../../../../../app/redux/store";
import { useAppSelector } from "../../../../../hooks/reduxHooks/reduxHooks";

const FiltersMobileModal = () => {
  const availableFilters = useAppSelector(
    (state: RootState) => state.products.availableFilters
  );
  const {
    handleClickOnFilterOption,
    handleSubmitManualFilterOption,
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    isValidValue,
    isNotAvailableToSubmit,
  } = useFilters();

  return (
    <BottomSheet modalType="filter">
      <SearchBottomSheetLayout title="Filtrar por preço" modalType="filter">
        <div className="mt-10 px-8">
          {availableFilters?.values.map((filter) => (
            <button
              key={filter.id}
              className="flex w-full items-center gap-x-2 py-5 text-start text-lg font-light text-blueML antialiased"
              onClick={() => handleClickOnFilterOption(filter.id)}
            >
              {filter.name}
              <span className="text-sm text-gray-400">({filter.results})</span>
            </button>
          ))}

          <form
            className="mt-4 flex flex-1 items-center gap-x-2"
            onSubmit={handleSubmitManualFilterOption}
          >
            <Input
              type="text"
              placeholder="Mínimo"
              error={isValidValue(minValue)}
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              className="w-24 rounded-md border-[1px] border-gray-400 bg-white px-2 py-1 text-sm outline-0 focus:border-2 focus:border-blueML"
            />

            <span className="text-grayTextML">-</span>

            <Input
              type="text"
              placeholder="Máximo"
              error={isValidValue(maxValue)}
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              className="w-24 rounded-md border-[1px] border-gray-400 bg-white px-2 py-1 text-sm outline-0 focus:border-2 focus:border-blueML"
            />

            <button
              type="submit"
              className="flex items-center justify-center rounded-[100%] bg-blueML disabled:bg-grayML"
              onSubmit={(e) => handleSubmitManualFilterOption(e)}
              disabled={isNotAvailableToSubmit}
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
