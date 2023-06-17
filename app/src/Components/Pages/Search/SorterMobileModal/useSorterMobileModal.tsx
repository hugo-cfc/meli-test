import urlGenerator from "../../../../utils/URLgenerate";
import { useSearchContext } from "../../../../app/Context/searchContext";
import { useRouter, useSearchParams } from "next/navigation";

const useSorterMobileModal = () => {
  const router = useRouter();
  const { search } = useSearchContext();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(searchParams);

  const handleClickOnSortOption = (id: string) => {
    const generatedUrl = urlGenerator(search, {
      sort: id,
    });

    queryParams.delete("modal-type");

    router.push(generatedUrl);
  };

  return { handleClickOnSortOption };
};

export default useSorterMobileModal;
