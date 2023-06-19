"use client";

import SorterMobileModal from "../SorterComponents/SorterMobileModal";
import FiltersMobileModal from "../FiltersComponents/FiltersMobileModal";
import useSearchToolbar from "./useSearchToolbar";
import { useSearchContext } from "../../../../app/Context/searchContext";
import SearchDetails from "../SearchDetails";
import useProducts from "../../../../hooks/useProducts";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import { RootState } from "../../../../app/redux/store";

const SearchToolbar = () => {
  const { handleOpenModal, pathname, toolbarOptions } = useSearchToolbar();
  const { availableFilters, filters } = useSearchContext();
  const { isLoading } = useProducts();
  const totalResults = useAppSelector(
    (state: RootState) => state.products.totalResults
  );

  return (
    <>
      {isLoading ? (
        <div className={`flex h-[104px] tablet:hidden`} />
      ) : (
        <div
          className={`mb-4 ${totalResults === 0 ? "hidden" : "tablet:flex"}`}
        >
          <div className="bg-white w-screen h-12 tablet:hidden flex">
            {toolbarOptions.map((item) => (
              <button
                key={item.type}
                className={`flex-1 flex items-center justify-center gap-x-2 text-blueML ${
                  !availableFilters && item.type === "filter" && "hidden"
                }`}
                onClick={() => handleOpenModal(item.type)}
              >
                {item.icon}
                <span className="text-sm font-light">{item.title}</span>
              </button>
            ))}

            <SorterMobileModal />
            <FiltersMobileModal />
          </div>

          <SearchDetails search={pathname} filters={filters} />
        </div>
      )}
    </>
  );
};

export default SearchToolbar;
