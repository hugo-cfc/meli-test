"use client";

import { useSearchContext } from "../../../../../app/Context/searchContext";
import urlGenerator from "../../../../../utils/urlGenerator";
import { useRouter, useSearchParams } from "next/navigation";

const useFilterBadge = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { search } = useSearchContext();

  const queryParams = new URLSearchParams(searchParams);

  const currentSort = searchParams.get("sort");

  const handleClickOnFilterOption = () => {
    const generatedUrl = urlGenerator(
      { api: false, pathname: search },
      {
        sort: currentSort,
      }
    );

    queryParams.delete("price");

    router.push(generatedUrl);
  };

  return { handleClickOnFilterOption };
};

export default useFilterBadge;
