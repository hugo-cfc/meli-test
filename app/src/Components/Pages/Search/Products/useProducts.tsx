/* eslint-disable @typescript-eslint/naming-convention */
import getProducts from "../../../../fetchers/getProducts";
import { useSearchContext } from "../../../../app/Context/searchContext";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import urlGenerator from "../../../../utils/URLgenerate";

const useProducts = () => {
  const {
    setProducts,
    setSearch,
    setSort,
    setAvailableSorts,
    setFilter,
    setAvailableFilters,
  } = useSearchContext();

  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const searchPath = usePathname();

  const paramsSort = searchParams.get("sort");
  const paramsPrice = searchParams.get("price");

  const formattedPathname = decodeURIComponent(searchPath.replace("/", ""));

  const generatedUrl = urlGenerator(formattedPathname, {
    sort: paramsSort,
    price: paramsPrice,
  }).replace("?", "&");

  useEffect(() => {
    setIsLoading(true);

    setSearch(formattedPathname);

    (async () => {
      try {
        const {
          results,
          available_sorts,
          filters,
          available_filters,
          sortApi,
        } = await getProducts(generatedUrl);

        const sortSortersById = [sortApi, ...available_sorts].sort(function (
          a,
          b
        ) {
          const sorterA = a.id;
          const sorterB = b.id;

          return sorterB < sorterA ? -1 : sorterB > sorterA ? 1 : 0;
        });

        setProducts(results);
        setSort(sortApi);
        setAvailableSorts(sortSortersById);
        setFilter(filters);
        setAvailableFilters(available_filters);
        setIsLoading(false);
      } catch (error) {
        // console.error("Erro ao obter produtos:", error);

        setIsLoading(false);
      }
    })();
  }, [paramsSort]);

  return {
    isLoading,
  };
};

export default useProducts;
