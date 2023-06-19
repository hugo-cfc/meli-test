"use client";

import { useSearchParams } from "next/navigation";

import { RootState } from "../../../../../app/redux/store";
import { useAppSelector } from "../../../../../hooks/reduxHooks/reduxHooks";
import useSorter from "../../../../../hooks/useSorters";
import BottomSheet from "../../../../BottomSheet";
import SearchBottomSheetLayout from "../../SearchBottomSheetLayout";

const SorterMobileModal = () => {
  const { handleClickOnSortOption } = useSorter();
  const searchParams = useSearchParams();

  const availableSorts = useAppSelector(
    (state: RootState) => state.products.availableSorts
  );

  const sort = searchParams.get("sort");

  return (
    <BottomSheet modalType="sort">
      <SearchBottomSheetLayout title="Ordernar por" modalType="sort">
        <ul className="mt-10">
          {availableSorts.map((option) => (
            <li
              key={option.id}
              className="relative border-y-[1px] border-grayML"
            >
              {sort === option.id && (
                <hr className="absolute left-0.5 top-0 h-full w-1.5 bg-blueML" />
              )}

              <button
                className="w-full px-8 py-5 text-start font-light text-grayTextML antialiased"
                onClick={() => handleClickOnSortOption(option.id)}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      </SearchBottomSheetLayout>
    </BottomSheet>
  );
};

export default SorterMobileModal;
