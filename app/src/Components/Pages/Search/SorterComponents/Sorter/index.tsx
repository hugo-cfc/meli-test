"use client";

import { ChevronDown } from "lucide-react";
import DropdownSorter from "../DropdownSorter";
import { useSearchContext } from "../../../../../app/Context/searchContext";
import useProducts from "../../../../../hooks/useProducts";

const Sorter = () => {
  const { isSorterDropdownOpen, setIsSorterDropdownOpen, sort, totalResults } =
    useSearchContext();
  const { isLoading } = useProducts();

  return (
    <>
      {isLoading ? (
        <div className={`hidden tablet:flex tablet:h-[92px]`} />
      ) : (
        <div
          className={`hidden mt-12 mb-4 w-full justify-end items-center gap-x-1.5 relative ${
            totalResults === 0 ? "tablet:hidden" : "tablet:flex"
          }`}
        >
          <span className="text-grayTextML text-sm">Ordernar por</span>
          <button
            className="flex items-center justify-center gap-x-1 transition-all hover:text-blueML"
            onClick={() => setIsSorterDropdownOpen((prevState) => !prevState)}
          >
            <span
              className={`${
                isSorterDropdownOpen && "text-blueML"
              } text-sm font-light`}
            >
              {sort?.name}
            </span>
            <ChevronDown
              className={`w-4 text-blueML transition-all ${
                isSorterDropdownOpen && "rotate-180"
              }`}
            />
          </button>

          <DropdownSorter />
        </div>
      )}
    </>
  );
};

export default Sorter;
