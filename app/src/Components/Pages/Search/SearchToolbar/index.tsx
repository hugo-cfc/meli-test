"use client";

import SorterMobileModal from "../SorterComponents/SorterMobileModal";
import FiltersMobileModal from "../FiltersComponents/FiltersMobileModal";
import useSearchToolbar from "./useSearchToolbar";
import SearchDetails from "../SearchDetails";
import useProducts from "../../../../hooks/useProducts";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import { RootState } from "../../../../app/redux/store";

const SearchToolbar = () => {
  const { handleOpenModal, pathname, toolbarOptions } = useSearchToolbar();
  const { isLoading } = useProducts();
  const totalResults = useAppSelector(
    (state: RootState) => state.products.totalResults
  );
  const availableFilters = useAppSelector(
    (state: RootState) => state.products.availableFilters
  );
  const filters = useAppSelector((state: RootState) => state.products.filters);

  return (
    <>
      {isLoading ? (
        <nav className={`flex h-[104px] tablet:hidden`} />
      ) : (
        <nav
          className={`mb-4 ${totalResults === 0 ? "hidden" : "tablet:flex"}`}
        >
          <div className="flex h-12 w-screen bg-white tablet:hidden">
            {toolbarOptions.map((item) => (
              <button
                key={item.type}
                className={`flex flex-1 items-center justify-center gap-x-2 text-blueML ${
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
        </nav>
      )}
    </>
  );
};

export default SearchToolbar;
