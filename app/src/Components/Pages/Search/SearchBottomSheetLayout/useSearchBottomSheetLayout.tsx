import { useSearchContext } from "../../../../app/Context/searchContext";
import { useRouter, useSearchParams } from "next/navigation";

const useSearchBottomSheetLayout = () => {
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

  return { handleCloseModal };
};

export default useSearchBottomSheetLayout;
