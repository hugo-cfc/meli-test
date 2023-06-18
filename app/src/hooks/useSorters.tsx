import urlGenerator from "../utils/urlGenerator";
import { useSearchContext } from "../app/Context/searchContext";
import { useRouter, useSearchParams } from "next/navigation";

const useSorter = () => {
  const router = useRouter();
  const { search, setIsSorterDropdownOpen } = useSearchContext();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(searchParams);

  const currentPrice = searchParams.get("price");

  const handleClickOnSortOption = (id: string) => {
    const generatedUrl = urlGenerator(
      { pathname: search, api: false },
      {
        sort: id,
        price: currentPrice,
      }
    );

    setIsSorterDropdownOpen(false);

    queryParams.delete("modal-type");

    router.push(generatedUrl);
  };

  return { handleClickOnSortOption };
};

export default useSorter;
