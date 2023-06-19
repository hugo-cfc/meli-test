"use client";

import { ChevronDown } from "lucide-react";
import DropdownSorter from "../DropdownSorter";
import useProducts from "../../../../../hooks/useProducts";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks/reduxHooks";
import { RootState } from "../../../../../app/redux/store";
import { setIsSorterDropdownOpen } from "../../../../../app/redux/Features/productsSlice";

const Sorter = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useProducts();
  const totalResults = useAppSelector(
    (state: RootState) => state.products.totalResults
  );
  const isSorterDropdownOpen = useAppSelector(
    (state: RootState) => state.products.isSorterDropdownOpen
  );

  const sort = useAppSelector((state: RootState) => state.products.sort);

  return (
    <>
      {isLoading ? (
        <div className={`hidden tablet:flex tablet:h-[92px]`} />
      ) : (
        <div
          className={`relative mb-4 mt-12 hidden w-full items-center justify-end gap-x-1.5 ${
            totalResults === 0 ? "tablet:hidden" : "tablet:flex"
          }`}
        >
          <span className="text-sm text-grayTextML">Ordernar por</span>
          <button
            className="flex items-center justify-center gap-x-1 transition-all hover:text-blueML"
            onClick={() =>
              dispatch(setIsSorterDropdownOpen(!isSorterDropdownOpen))
            }
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
