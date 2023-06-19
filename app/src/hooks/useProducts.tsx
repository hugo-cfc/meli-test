/* eslint-disable @typescript-eslint/naming-convention */
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  setTotalResults,
  setProducts,
  setSort,
  setAvailableSorts,
  setAvailableFilters,
  setFilters,
  setSearch,
} from "../app/redux/Features/productsSlice";
import getProducts from "../fetchers/getProducts";
import { useAppDispatch } from "../hooks/reduxHooks/reduxHooks";
import urlGenerator from "../utils/urlGenerator";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const searchPath = usePathname();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);

  const paramsSort = searchParams.get("sort");
  const paramsPrice = searchParams.get("price");

  const formattedPathname = decodeURIComponent(searchPath.replace("/", ""));

  const generatedUrl = urlGenerator(
    {
      api: true,
      pathname: formattedPathname,
    },
    {
      sort: paramsSort,
      price: paramsPrice,
    }
  );

  useEffect(() => {
    setIsLoading(true);

    dispatch(setSearch(formattedPathname));

    (async () => {
      try {
        const {
          paging,
          results,
          available_sorts,
          availableFilters,
          filters,
          sortApi,
        } = await getProducts(generatedUrl);

        dispatch(setProducts(results));
        dispatch(setTotalResults(paging.total));
        dispatch(setSort(sortApi));
        dispatch(setAvailableSorts(available_sorts));
        dispatch(setAvailableFilters(availableFilters));
        dispatch(setFilters(filters));

        setIsLoading(false);
      } catch (error) {
        // console.error("Erro ao obter produtos:", error);

        setIsLoading(false);
      }
    })();
  }, [paramsSort, paramsPrice]);

  return {
    isLoading,
  };
};

export default useProducts;
