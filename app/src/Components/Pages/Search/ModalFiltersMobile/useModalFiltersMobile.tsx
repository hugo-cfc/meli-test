import urlGenerator from "../../../../utils/URLgenerate";
import { useSearchContext } from "../../../../app/Context/searchContext";
import { useRouter, useSearchParams } from "next/navigation";

const useModalFiltersMobile = () => {
  const router = useRouter();
  const { search } = useSearchContext();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(searchParams);

  const handleCloseModal = () => {
    queryParams.delete("modal-type");

    const params = queryParams.toString();

    router.push(`/${search}?${params}`, {
      shallow: true,
    });
  };

  const handleClickOnSortOption = (id: string) => {
    const generatedUrl = urlGenerator(search, {
      sort: id,
    });

    router.push(generatedUrl);
  };

  return { handleClickOnSortOption, handleCloseModal };
};

export default useModalFiltersMobile;
