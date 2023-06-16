import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const useHeader = () => {
  const searchParams = usePathname();
  const router = useRouter();

  const formatedPathname = decodeURIComponent(searchParams.replace("/", ""));

  const [search, setSearch] = useState(formatedPathname);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/${search}?sort=relevance`);
  };

  const handleClickLogo = () => {
    setSearch("");

    router.push("/");
  };

  return { handleSubmit, search, setSearch, handleClickLogo, formatedPathname };
};

export default useHeader;
