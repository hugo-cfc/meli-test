"use client";

import { X as XIcon } from "lucide-react";
import useFilterBadge from "./useFilterBadge";

interface FilterBadgeProps {
  title: string;
}

const FilterBadge = ({ title }: FilterBadgeProps) => {
  const { handleClickOnFilterOption } = useFilterBadge();

  return (
    <button
      className="bg-gray-300 w-fit px-2 py-1 flex gap-x-1 items-center rounded-3xl text-grayTextML font-light text-sm"
      onClick={() => handleClickOnFilterOption()}
    >
      {title}
      <XIcon className="w-4 text-gray-600" />
    </button>
  );
};

export default FilterBadge;
