"use client";

import { setIsSorterDropdownOpen } from "@/app/redux/Features/productsSlice";
import { RootState } from "@/app/redux/store";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { ReactNode } from "react";

const Dropdown = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const isSorterDropdownOpen = useAppSelector(
    (state: RootState) => state.products.isSorterDropdownOpen
  );

  return (
    <>
      <div
        className={`${
          isSorterDropdownOpen
            ? "fixed left-0 top-0 z-10 h-screen w-screen"
            : "hidden"
        }`}
        onClick={() => dispatch(setIsSorterDropdownOpen(false))}
        data-testid="overlay-div"
      />
      <div
        className={`absolute right-0 top-[30px] z-10 overflow-hidden rounded-md bg-white shadow-xl transition-all ${
          isSorterDropdownOpen ? "block" : "hidden"
        }`}
      >
        <ul>{children}</ul>
      </div>
    </>
  );
};

export default Dropdown;
