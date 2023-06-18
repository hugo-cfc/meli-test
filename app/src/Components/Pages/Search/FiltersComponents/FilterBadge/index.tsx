"use client";

import { X as XIcon } from "lucide-react";
import useFilters from "../../../../../hooks/useFilters";

interface FilterBadgeProps {
  title: string;
}

const FilterBadge = ({ title }: FilterBadgeProps) => {
  const { handleRemoveFilter } = useFilters();

  return (
    <button
      className="bg-gray-300 w-fit px-2 py-1 flex gap-x-1 items-center rounded-3xl text-grayTextML font-light text-sm tablet:bg-white tablet:text-xs tablet:rounded-none tablet:py-0"
      onClick={() => handleRemoveFilter()}
    >
      {title}
      <XIcon className="w-4 text-gray-600 tablet:text-grayML" />
    </button>
  );
};

export default FilterBadge;
