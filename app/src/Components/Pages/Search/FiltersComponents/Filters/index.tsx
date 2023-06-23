"use client";

import { ChevronRight } from "lucide-react";

import { RootState } from "../../../../../app/redux/store";
import { useAppSelector } from "../../../../../hooks/reduxHooks/reduxHooks";
import useFilters from "../../../../../hooks/useFilters";
import useProducts from "../../../../../hooks/useProducts";
import Input from "../../../../Input";
import FilterBadge from "../FilterBadge";
import FiltersSkeletons from "./skeleton";

const Filters = () => {
  const totalResults = useAppSelector(
    (state: RootState) => state.products.totalResults
  );
  const availableFilters = useAppSelector(
    (state: RootState) => state.products.availableFilters
  );
  const filters = useAppSelector((state: RootState) => state.products.filters);
  const search = useAppSelector((state: RootState) => state.products.search);
  const {
    handleClickOnFilterOption,
    handleSubmitManualFilterOption,
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    isNotAvailableToSubmit,
    isValidValue,
  } = useFilters();
  const { isLoading } = useProducts();

  return (
    <>
      {isLoading ? (
        <div
          className={`col-start-1 col-end-3 hidden flex-col tablet:flex`}
          data-testid="skeleton"
        >
          <FiltersSkeletons />
        </div>
      ) : (
        <aside
          className={`col-start-1 col-end-3 hidden flex-col ${
            totalResults === 0 ? "tablet:hidden" : "tablet:flex"
          }`}
        >
          <h1
            data-testid="search-title"
            className="text-2xl text-grayTextML line-clamp-3 tablet:line-clamp-2"
          >
            {search}
          </h1>

          <legend
            data-testid="total-results-legend"
            className="mb-4 text-xs font-thin text-grayTextML desktop:text-sm"
          >
            {totalResults} {totalResults === 1 ? "resultado" : "resultados"}
          </legend>

          {filters?.map((filter) => {
            if (filter.id !== "price") return;

            return (
              <FilterBadge key={filter.id} title={filter.values[0]?.name} />
            );
          })}

          <div className="mt-4 flex flex-col">
            <h2 className="mb-2">Preço</h2>
            <ul>
              {availableFilters?.values.map((filter) => (
                <li
                  key={filter.id}
                  className="mb-1 flex w-fit cursor-pointer items-center gap-x-2 text-start text-xs font-light text-grayTextML antialiased desktop:text-sm"
                  onClick={() => handleClickOnFilterOption(filter.id)}
                  data-testid="filter-li"
                >
                  {filter.name}
                  <span
                    className="text-xs font-light text-gray-400 antialiased"
                    data-testid="filter-results"
                  >
                    ({filter.results})
                  </span>
                </li>
              ))}
            </ul>

            <form
              className="mt-2 flex items-center gap-x-1"
              onSubmit={handleSubmitManualFilterOption}
              data-testid="form"
            >
              <Input
                type="text"
                placeholder="Mínimo"
                error={isValidValue(minValue)}
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
                className="w-16 rounded-md border-[1px] border-gray-400 bg-white px-1 py-0.5 text-xs outline-0 focus:border-2 focus:border-blueML notebook:w-14 desktop:py-1"
                data-testid="input-min-value"
              />

              <span className="text-grayTextML">-</span>

              <Input
                type="text"
                placeholder="Máximo"
                error={isValidValue(maxValue)}
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
                className="w-16 rounded-md border-[1px] border-gray-400 bg-white px-1 py-0.5 text-xs outline-0 focus:border-2 focus:border-blueML notebook:w-14 desktop:py-1"
                data-testid="input-max-value"
              />

              <button
                type="submit"
                className="flex h-5 w-5 items-center justify-center rounded-[100%] bg-blueML disabled:bg-gray-400"
                disabled={isNotAvailableToSubmit}
                data-testid="submit-button"
              >
                <ChevronRight
                  className="w-4 text-white"
                  data-testid="icon-submit-button"
                />
              </button>
            </form>
          </div>
        </aside>
      )}
    </>
  );
};

export default Filters;
