import urlGenerator from "../../../../utils/urlGenerator";
import { useSearchContext } from "../../../../app/Context/searchContext";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const useFiltersMobileModal = () => {
  const router = useRouter();
  const { search, availableFilters } = useSearchContext();
  const searchParams = useSearchParams();
  const validationRegex = /^[0-9]+([,.][0-9]+)?$/gm;

  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");

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
    validationRegex,
  };
};

export default useFiltersMobileModal;
