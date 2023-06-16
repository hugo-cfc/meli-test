"use client";

import { ArrowLeft } from "lucide-react";
import useModalSorter from "./useModalSorter";
import { useSearchContext } from "../../../../app/Context/searchContext";

const ModalSorter = () => {
  const { handleClickOnSortOption } = useModalSorter();
  const { isSorterModalOpen, setIsSorterModalOpen, sort, availableSorts } =
    useSearchContext();

  return (
    <div
      className={`fixed z-50 left-0 w-screen h-screen bg-white transition-all ${
        isSorterModalOpen
          ? "animate-bottomModal top-0 "
          : "animate-bottomModalOut top-[101%]"
      } tablet:hidden`}
    >
      <div className="py-4 px-8">
        <button
          className="w-9 py-1 aspect-square"
          onClick={() => setIsSorterModalOpen(false)}
        >
          <ArrowLeft className="text-blueML w-8" />
        </button>

        <h1 className="text-grayTextML text-3xl mt-10">Ordenar por</h1>
      </div>

      <ul className="mt-10">
        {availableSorts.sort().map((option) => (
          <li key={option.id} className="border-y-[1px] border-grayML relative">
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
    </div>
  );
};

export default ModalSorter;
