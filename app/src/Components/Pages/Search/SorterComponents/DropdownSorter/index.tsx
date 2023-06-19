"use client";

import { useSearchParams } from "next/navigation";
import useSorter from "../../../../../hooks/useSorters";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxHooks/reduxHooks";
import { RootState } from "../../../../../app/redux/store";
import { setIsSorterDropdownOpen } from "../../../../../app/redux/Features/productsSlice";

const DropdownSorter = () => {
  const { handleClickOnSortOption } = useSorter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const availableSorts = useAppSelector(
    (state: RootState) => state.products.availableSorts
  );
  const isSorterDropdownOpen = useAppSelector(
    (state: RootState) => state.products.isSorterDropdownOpen
  );

  const sort = searchParams.get("sort");

  return (
    <>
      <div
        className={`${
          isSorterDropdownOpen
            ? "fixed left-0 top-0 z-10 h-screen w-screen"
            : "hidden"
        }`}
        onClick={() => dispatch(setIsSorterDropdownOpen(false))}
      />
      <div
        className={`absolute right-0 top-[30px] z-10 overflow-hidden rounded-md bg-white shadow-xl transition-all ${
          isSorterDropdownOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {availableSorts.map((option) => (
            <li
              key={option.id}
              className="relative border-y-[1px] border-grayML transition-all hover:bg-slate-200"
            >
              {sort === option.id && (
                <hr className="absolute left-0 top-0 h-full w-1.5 bg-blueML" />
              )}

              <button
                className={`${
                  sort === option.id ? "text-blueML" : "text-grayTextML"
                } w-full px-4 py-2 text-start text-sm font-light antialiased hover:text-blueML`}
                onClick={() => handleClickOnSortOption(option.id)}
              >
                <div className="absolute left-0 top-0 z-0 h-full w-full opacity-0 hover:opacity-100">
                  <hr className="absolute left-0 top-0 h-full w-1.5 bg-blue-300" />
                </div>
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownSorter;
