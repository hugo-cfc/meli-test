"use client";

import { ChevronRight } from "lucide-react";
import Input from "../../../../Input";
import { useSearchContext } from "../../../../../app/Context/searchContext";
import FilterBadge from "../FilterBadge";
import useFilters from "../../../../../hooks/useFilters";
import useProducts from "../../../../../hooks/useProducts";
import FiltersSkeletons from "./skeleton";

const Filters = () => {
  const { filters, search, availableFilters, totalResults } =
    useSearchContext();
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

  const { isLoading } = useProducts();

  return (
    <>
      {!isLoading ? (
        <div
          className={`hidden flex-col col-start-1 col-end-3 ${
            totalResults == 0 ? "tablet:hidden" : "tablet:flex"
          }`}
        >
          <h1 className="text-grayTextML text-2xl line-clamp-3 tablet:line-clamp-2">
            {search}
          </h1>

          <legend className="text-grayTextML text-xs font-thin mb-4 desktop:text-sm">
            {totalResults} {totalResults === 1 ? "resultado" : "resultados"}
          </legend>

          {filters?.map((filter) => {
            if (filter.id !== "price") return;

            return (
              <FilterBadge key={filter.id} title={filter.values[0].name} />
            );
          })}

          <div className="flex flex-col mt-4">
            <h1 className="mb-2">Preço</h1>
            <ul>
              {availableFilters?.values.map((filter) => (
                <li
                  key={filter.id}
                  className="text-grayTextML text-xs font-light antialiased text-start flex items-center gap-x-2 mb-1 desktop:text-sm w-fit"
                  onClick={() => handleClickOnFilterOption(filter.id)}
                >
                  {filter.name}
                  <span className="text-gray-400 text-xs font-light antialiased">
                    ({filter.results})
                  </span>
                </li>
              ))}
            </ul>

            <form
              className="mt-2 flex gap-x-1 items-center"
              onSubmit={handleSubmitManualFilterOption}
            >
              <Input
                type="text"
                placeholder="Mínimo"
                error={isValidMinValue}
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
                className="w-16 px-1 py-0.5 bg-white border-[1px] border-gray-400 rounded-md text-xs outline-0 focus:border-blueML focus:border-2 notebook:w-14 desktop:py-1"
              />

              <span className="text-grayTextML">-</span>

              <Input
                type="text"
                placeholder="Máximo"
                error={isValidMaxValue}
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
                className="w-16 px-1 py-0.5 bg-white border-[1px] border-gray-400 rounded-md text-xs outline-0 focus:border-blueML focus:border-2 notebook:w-14 desktop:py-1"
              />

              <button
                type="submit"
                className="w-5 h-5 bg-blueML rounded-[100%] flex items-center justify-center disabled:bg-gray-400"
                onSubmit={(e) => handleSubmitManualFilterOption(e)}
                disabled={
                  (minValue === "" && maxValue === "") ||
                  isValidMinValue !== "" ||
                  isValidMaxValue !== ""
                }
              >
                <ChevronRight className="w-4 text-white" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className={`hidden tablet:flex flex-col col-start-1 col-end-3`}>
          <FiltersSkeletons />
        </div>
      )}
    </>
  );
};

export default Filters;
