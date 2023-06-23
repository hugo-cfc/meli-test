"use client";

import { RootState } from "../../../../app/redux/store";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import useProducts from "../../../../hooks/useProducts";
import FiltersMobileModal from "../FiltersComponents/FiltersMobileModal";
import SearchDetails from "../SearchDetails";
import SorterMobileModal from "../SorterComponents/SorterMobileModal";
import useSearchToolbar from "./useSearchToolbar";

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
        <nav
          className={`flex h-[104px] tablet:hidden`}
          data-testid="nav-loading"
        />
      ) : (
        <nav
          className={`mb-4 ${totalResults === 0 ? "hidden" : "tablet:flex"}`}
          data-testid="nav-is-not-loading"
        >
          <div
            className="flex h-12 w-screen bg-white tablet:hidden"
            data-testid="container"
          >
            {toolbarOptions.map((item) => (
              <button
                key={item.type}
                className={`flex flex-1 items-center justify-center gap-x-2 text-blueML ${
                  !availableFilters && item.type === "filter" && "hidden"
                }`}
                onClick={() => handleOpenModal(item.type)}
                data-testid={`button-option-${item.type}`}
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
