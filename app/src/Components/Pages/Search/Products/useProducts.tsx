import getProducts from "../../../../fetchers/getProducts";
import { useGlobalContext } from "../../../../app/Context/searchContext";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import urlGenerator from "../../../../utils/URLgenerate";

const useProducts = () => {
  const { setProducts, setSearch, setSort } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const searchPath = usePathname();

  const sort = searchParams.get("sort");
  const price = searchParams.get("filter");

  const formattedPathname = decodeURIComponent(searchPath.replace("/", ""));

  const generatedUrl = urlGenerator(formattedPathname, {
    sort,
    price,
  }).replace("?", "&");

  useEffect(() => {
    setIsLoading(true);

    setSearch(formattedPathname);
    setSort(sort);

    (async () => {
      try {
        const products = await getProducts(generatedUrl);

        setProducts(products);

        setIsLoading(false);
      } catch (error) {
        // console.error("Erro ao obter produtos:", error);

        setIsLoading(false);
      }
    })();
  }, [sort]);

  return {
    isLoading,
  };
};

export default useProducts;
