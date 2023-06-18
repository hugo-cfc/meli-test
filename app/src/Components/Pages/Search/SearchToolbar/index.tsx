"use client";

import SorterMobileModal from "../SorterMobileModal";
import FiltersMobileModal from "../FiltersComponents/FiltersMobileModal";
import useSearchToolbar from "./useSearchToolbar";
import { useSearchContext } from "../../../../app/Context/searchContext";
import SearchDetails from "../SearchDetails";

const SearchToolbar = () => {
  const { handleOpenModal, pathname, toolbarOptions } = useSearchToolbar();
  const { availableFilters, filters } = useSearchContext();

  return (
    <div className="mb-4">
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
  );
};

export default SearchToolbar;
