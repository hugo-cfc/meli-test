"use client";

import { useSearchContext } from "../../../../../app/Context/searchContext";
import { useSearchParams } from "next/navigation";
import useSorter from "../../../../../hooks/useSorters";
import { useAppSelector } from "../../../../../hooks/reduxHooks/reduxHooks";
import { RootState } from "../../../../../app/redux/store";

const DropdownSorter = () => {
  const { handleClickOnSortOption } = useSorter();
  const { isSorterDropdownOpen, setIsSorterDropdownOpen } = useSearchContext();
  const searchParams = useSearchParams();

  const availableSorts = useAppSelector(
    (state: RootState) => state.products.availableSorts
  );

  const sort = searchParams.get("sort");

  return (
    <>
      <div
        className={`${
          isSorterDropdownOpen
            ? "fixed z-10 top-0 left-0 w-screen h-screen"
            : "hidden"
        }`}
        onClick={() => setIsSorterDropdownOpen(false)}
      />
      <div
        className={`overflow-hidden absolute z-10 top-[30px] right-0 bg-white rounded-md shadow-xl transition-all ${
          isSorterDropdownOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {availableSorts.map((option) => (
            <li
              key={option.id}
              className="border-y-[1px] border-grayML relative transition-all hover:bg-slate-200"
            >
              {sort === option.id && (
                <hr className="absolute left-0 top-0 w-1.5 h-full bg-blueML" />
              )}

              <button
                className={`${
                  sort === option.id ? "text-blueML" : "text-grayTextML"
                } font-light antialiased px-4 py-2 w-full text-start text-sm hover:text-blueML`}
                onClick={() => handleClickOnSortOption(option.id)}
              >
                <div className="absolute left-0 top-0 z-0 w-full h-full opacity-0 hover:opacity-100">
                  <hr className="absolute left-0 top-0 w-1.5 h-full bg-blue-300" />
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
