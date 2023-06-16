"use client";

import { ArrowLeft } from "lucide-react";
import useModalSorter from "./useModalSorter";

const ModalSorter = () => {
  const { options } = useModalSorter();

  return (
    <div className="absolute z-50 top-0 left-0 w-screen h-screen bg-white tablet:hidden">
      <div className="py-4 px-8">
        <button className="w-9 py-1 aspect-square">
          <ArrowLeft className="text-blueML w-8" />
        </button>

        <h1 className="text-3xl mt-10">Ordenar por</h1>
      </div>

      <ul className="mt-10">
        {options.map((option) => (
          <li key={option.id} className="border-y-[1px] border-grayML relative">
            {option.name === option.name && (
              <hr className="absolute left-1 top-0 w-1.5 h-full bg-blueML" />
            )}

            <button className="text-black font-light antialiased px-8 py-5">
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalSorter;
