import urlGenerator from "../../../../utils/URLgenerate";
import { useSearchContext } from "../../../../app/Context/searchContext";
import { useRouter } from "next/navigation";

const useModalSorter = () => {
  const router = useRouter();
  const { search, setIsSorterModalOpen } = useSearchContext();

  const handleClickOnSortOption = (id: string) => {
    const generatedUrl = urlGenerator(search, {
      sort: id,
    });

    router.push(generatedUrl);

    setIsSorterModalOpen(false);
  };

  return { handleClickOnSortOption };
};

export default useModalSorter;
