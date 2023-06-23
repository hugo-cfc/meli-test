"use client";

import { RootState } from "@/app/redux/store";
import BottomSheet from "@/Components/BottomSheet";
import Input from "@/Components/Input";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import useFilters from "@/hooks/useFilters";
import { ChevronRight } from "lucide-react";

import SearchBottomSheetLayout from "../../SearchBottomSheetLayout";

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
        <div className="mt-10 px-8" data-testid="container">
          {availableFilters?.values.map((filter) => (
            <button
              key={filter.id}
              className="flex w-full items-center gap-x-2 py-5 text-start text-lg font-light text-blueML antialiased"
              onClick={() => handleClickOnFilterOption(filter.id)}
              data-testid="filter-option-button"
            >
              {filter.name}
              <span
                className="text-sm text-gray-400"
                data-testid="total-results-by-filter"
              >
                ({filter.results})
              </span>
            </button>
          ))}

          <form
            className="mt-4 flex flex-1 items-center gap-x-2"
            onSubmit={handleSubmitManualFilterOption}
            data-testid="filter-form"
          >
            <Input
              type="text"
              placeholder="Mínimo"
              error={isValidValue(minValue)}
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              className="w-24 rounded-md border-[1px] border-gray-400 bg-white px-2 py-1 text-sm outline-0 focus:border-2 focus:border-blueML"
              data-testid="input-min-value"
            />

            <span className="text-grayTextML">-</span>

            <Input
              type="text"
              placeholder="Máximo"
              error={isValidValue(maxValue)}
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              className="w-24 rounded-md border-[1px] border-gray-400 bg-white px-2 py-1 text-sm outline-0 focus:border-2 focus:border-blueML"
              data-testid="input-max-value"
            />

            <button
              type="submit"
              className="flex items-center justify-center rounded-[100%] bg-blueML disabled:bg-grayML"
              disabled={isNotAvailableToSubmit}
              data-testid="submit-button"
            >
              <ChevronRight
                className="w-6 text-white"
                data-testid="icon-submit-button"
              />
            </button>
          </form>
        </div>
      </SearchBottomSheetLayout>
    </BottomSheet>
  );
};

export default FiltersMobileModal;
