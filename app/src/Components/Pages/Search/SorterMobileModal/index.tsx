"use client";

import useSorterMobileModal from "./useSorterMobileModal";
import { useSearchContext } from "../../../../app/Context/searchContext";
import BottomSheet from "../../../BottomSheet";
import SearchBottomSheetLayout from "../SearchBottomSheetLayout";

const SorterMobileModal = () => {
  const { handleClickOnSortOption } = useSorterMobileModal();
  const { sort, availableSorts } = useSearchContext();

  return (
    <BottomSheet modalType="sort">
      <SearchBottomSheetLayout title="Ordernar por" modalType="sort">
        <ul className="mt-10">
          {availableSorts.sort().map((option) => (
            <li
              key={option.id}
              className="border-y-[1px] border-grayML relative"
            >
              {sort?.id === option.id && (
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
