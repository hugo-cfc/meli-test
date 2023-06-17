import urlGenerator from "../../../../utils/urlGenerator";
import { useSearchContext } from "../../../../app/Context/searchContext";
import { useRouter, useSearchParams } from "next/navigation";

const useFiltersMobileModal = () => {
  const router = useRouter();
  const { search, availableFilters } = useSearchContext();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort");

  const queryParams = new URLSearchParams(searchParams);

  const handleClickOnFilterOption = (id: string) => {
    const generatedUrl = urlGenerator(
      { api: false, pathname: search },
      {
        sort: currentSort,
        price: id,
      }
    );

    queryParams.delete("modal-type");

    router.push(generatedUrl);
  };

  return { handleClickOnFilterOption, availableFilters };
};

export default useFiltersMobileModal;
