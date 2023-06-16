import urlGenerator from "../../../../utils/URLgenerate";
import { useGlobalContext } from "../../../../app/Context/searchContext";
import { useRouter } from "next/navigation";

const useModalSorter = () => {
  const router = useRouter();
  const { search, setIsSorterModalOpen } = useGlobalContext();

  const options = [
    {
      id: "relevance",
      name: "Mais relevantes",
    },
    {
      id: "price_desc",
      name: "Maior preço",
    },
  ];

  const handleClickOnSortOption = (id: string) => {
    const generatedUrl = urlGenerator(search, {
      sort: id,
    });

    router.push(generatedUrl);

    setIsSorterModalOpen(false);
  };

  return { options, handleClickOnSortOption };
};

export default useModalSorter;
