import urlGenerator from "../../../../utils/urlGenerator";
import { useSearchContext } from "../../../../app/Context/searchContext";
import { useRouter } from "next/navigation";

const useDropdownSorter = () => {
  const router = useRouter();
  const { search, setIsSorterDropdownOpen } = useSearchContext();

  const handleClickOnSortOption = (id: string) => {
    const generatedUrl = urlGenerator(
      { pathname: search, api: false },
      {
        sort: id,
      }
    );

    router.push(generatedUrl);

    setIsSorterDropdownOpen(false);
  };

  return { handleClickOnSortOption };
};

export default useDropdownSorter;
