import urlGenerator from "../utils/urlGenerator";
import { useSearchContext } from "../app/Context/searchContext";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const useFilters = () => {
  const router = useRouter();
  const { search, availableFilters } = useSearchContext();
  const searchParams = useSearchParams();
  const validationRegex = /^[0-9]+([,.][0-9]+)?$/;

  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");

  const isValidMinValue =
    !validationRegex.test(minValue) && minValue ? "Formato errado" : "";

  const isValidMaxValue =
    !validationRegex.test(maxValue) && maxValue ? "Formato errado" : "";

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

  const handleSubmitManualFilterOption = (e: FormEvent) => {
    e.preventDefault();

    setMinValue("");
    setMaxValue("");

    handleClickOnFilterOption(manualFilterId);
  };

  return {
    handleClickOnFilterOption,
    handleSubmitManualFilterOption,
    availableFilters,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    isValidMinValue,
    isValidMaxValue,
  };
};

export default useFilters;
