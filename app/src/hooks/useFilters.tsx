import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

import { RootState } from "../app/redux/store";
import urlGenerator from "../functions/urlGenerator";
import { useAppSelector } from "./reduxHooks/reduxHooks";

const useFilters = () => {
  const router = useRouter();
  const search = useAppSelector((state: RootState) => state.products.search);
  const searchParams = useSearchParams();
  const validationRegex = /^[0-9]*([,.][0-9]+)?$/;

  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");

  const isValidValue = (value: string) =>
    !validationRegex.test(value) && value ? "Formato errado" : "";

  const isNotAvailableToSubmit =
    (minValue === "" && maxValue === "") ||
    isValidValue(minValue) !== "" ||
    isValidValue(maxValue) !== "";

  const manualFilterId = `${minValue ? minValue.replace(",", ".") : "*"}-${
    maxValue ? maxValue.replace(",", ".") : "*"
  }`;

  const currentSort = searchParams.get("sort");

  const queryParams = new URLSearchParams(searchParams);

  const handleClickOnFilterOption = (id: string) => {
    const generatedUrl = urlGenerator(
      { api: false, pathname: search },
      {
        sort: currentSort,
        price: id,
      }
    );

    queryParams.delete("modal-type");

    router.push(generatedUrl);
  };

  const handleRemoveFilter = () => {
    const generatedUrl = urlGenerator(
      { api: false, pathname: search },
      {
        sort: currentSort,
      }
    );

    queryParams.delete("price");

    router.push(generatedUrl);
  };

  const handleSubmitManualFilterOption = (e: FormEvent) => {
    e.preventDefault();

    setMinValue("");
    setMaxValue("");

    handleClickOnFilterOption(manualFilterId);
  };

  return {
    handleClickOnFilterOption,
    handleSubmitManualFilterOption,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    handleRemoveFilter,
    isValidValue,
    isNotAvailableToSubmit,
    router,
    searchParams,
  };
};

export default useFilters;
