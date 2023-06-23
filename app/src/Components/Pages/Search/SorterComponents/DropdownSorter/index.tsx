"use client";

import { RootState } from "@/app/redux/store";
import Dropdown from "@/Components/Dropdown";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";

import SorterDropdownItem from "../DropdownItem";

const DropdownSorter = () => {
  const availableSorts = useAppSelector(
    (state: RootState) => state.products.availableSorts
  );

  return (
    <>
      <Dropdown>
        {availableSorts.map((option) => (
          <SorterDropdownItem key={option.id} item={option} />
        ))}
      </Dropdown>
    </>
  );
};

export default DropdownSorter;
