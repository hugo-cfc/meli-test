import { useGlobalContext } from "../../app/Context/searchContext";
import getProducts from "../../fetchers/getProducts";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const useHeader = () => {
  const searchParams = usePathname();
  const router = useRouter();

  const { setProducts } = useGlobalContext();

  const formatedPathname = searchParams.replace("/", "");

  const [search, setSearch] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const products = await getProducts({ search });

    setProducts(products);

    router.push(`/${search}`);
  };

  const handleClickLogo = () => {
    setSearch("");

    router.push("/");
  };

  return { handleSubmit, search, setSearch, handleClickLogo, formatedPathname };
};

export default useHeader;
