/* eslint-disable @typescript-eslint/naming-convention */

import {
  setTotalResults,
  setProducts,
  setSort,
  setAvailableSorts,
  setAvailableFilters,
  setFilters,
  setSearch,
} from "@/app/redux/Features/productsSlice";
import getProducts from "@/fetchers/getProducts";
import urlGenerator from "@/functions/urlGenerator";
import { useAppDispatch } from "@/hooks/reduxHooks/reduxHooks";
import { usePathname, useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const searchPath = usePathname();
  const searchParams = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();

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
        enqueueSnackbar({
          message: "Erro ao obter produtos",
          variant: "error",
        });

        setIsLoading(false);
      }
    })();
  }, [paramsSort, paramsPrice]);

  return {
    isLoading,
  };
};

export default useProducts;
