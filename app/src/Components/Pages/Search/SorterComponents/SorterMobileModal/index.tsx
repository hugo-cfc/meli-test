"use client";

import BottomSheet from "../../../../BottomSheet";
import SearchBottomSheetLayout from "../../SearchBottomSheetLayout";
import useSorter from "../../../../../hooks/useSorters";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "../../../../../hooks/reduxHooks/reduxHooks";
import { RootState } from "../../../../../app/redux/store";

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
              className="border-y-[1px] border-grayML relative"
            >
              {sort === option.id && (
                <hr className="absolute left-0.5 top-0 w-1.5 h-full bg-blueML" />
              )}

              <button
                className="text-grayTextML font-light antialiased px-8 py-5 w-full text-start"
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
