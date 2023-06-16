import getProducts from "../../../../fetchers/getProducts";
import { useGlobalContext } from "../../../../app/Context/searchContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useProducs = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { setProducts } = useGlobalContext();
  const searchParams = usePathname();

  const formatedPathname = decodeURIComponent(searchParams.replace("/", ""));

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const products = await getProducts({ search: formatedPathname });

        setProducts(products);

        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao obter produtos:", error);

        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
  };
};

export default useProducs;
