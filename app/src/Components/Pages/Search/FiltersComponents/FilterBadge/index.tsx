"use client";

import useFilters from "@/hooks/useFilters";
import { X as XIcon } from "lucide-react";

interface FilterBadgeProps {
  title?: string;
}

const FilterBadge = ({ title }: FilterBadgeProps) => {
  const { handleRemoveFilter } = useFilters();

  return (
    <button
      className="flex w-fit items-center gap-x-1 rounded-3xl bg-gray-300 px-2 py-1 text-sm font-light text-grayTextML tablet:rounded-none tablet:bg-white tablet:py-0 tablet:text-xs"
      onClick={handleRemoveFilter}
    >
      {title}
      <XIcon className="w-4 text-gray-600 tablet:text-grayML" />
    </button>
  );
};

export default FilterBadge;
