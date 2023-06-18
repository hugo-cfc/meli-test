import urlGenerator from "../../../../../utils/urlGenerator";
import { useSearchContext } from "../../../../../app/Context/searchContext";
import { useRouter, useSearchParams } from "next/navigation";

const useSorterMobileModal = () => {
  const router = useRouter();
  const { search } = useSearchContext();
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

    queryParams.delete("modal-type");

    router.push(generatedUrl);
  };

  return { handleClickOnSortOption };
};

export default useSorterMobileModal;
