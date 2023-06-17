/* eslint-disable @typescript-eslint/naming-convention */
import getProducts from "../../../../fetchers/getProducts";
import { useSearchContext } from "../../../../app/Context/searchContext";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import urlGenerator from "../../../../utils/urlGenerator";

const useProducts = () => {
  const {
    setProducts,
    setSearch,
    setSort,
    setAvailableSorts,
    setAvailableFilters,
  } = useSearchContext();

  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const searchPath = usePathname();

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

    setSearch(formattedPathname);

    (async () => {
      try {
        const { results, available_sorts, availableFilters, sortApi } =
          await getProducts(generatedUrl);

        setProducts(results);
        setSort(sortApi);
        setAvailableSorts(available_sorts);
        setAvailableFilters(availableFilters);
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
