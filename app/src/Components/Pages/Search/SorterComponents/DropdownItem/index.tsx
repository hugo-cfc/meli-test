"use client";

import { useSearchParams } from "next/navigation";

import Sort from "../../../../../@types/Sort";
import useSorter from "../../../../../hooks/useSorters";

interface SorterDropdownItemProps {
  item: Sort;
}

const SorterDropdownItem = ({ item }: SorterDropdownItemProps) => {
  const { handleClickOnSortOption } = useSorter();
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort");

  return (
    <li
      className="relative border-y-[1px] border-grayML transition-all hover:bg-slate-200"
      data-testid="container"
    >
      {sort === item.id && (
        <hr
          className="absolute left-0 top-0 h-full w-1.5 bg-blueML"
          data-testid="active-indicator"
        />
      )}

      <button
        className={`${
          sort === item.id ? "text-blueML" : "text-grayTextML"
        } w-full px-4 py-2 text-start text-sm font-light antialiased hover:text-blueML`}
        onClick={() => handleClickOnSortOption(item.id)}
      >
        <div className="absolute left-0 top-0 z-0 h-full w-full opacity-0 hover:opacity-100">
          <hr className="absolute left-0 top-0 h-full w-1.5 bg-blue-300" />
        </div>
        {item.name}
      </button>
    </li>
  );
};

export default SorterDropdownItem;
