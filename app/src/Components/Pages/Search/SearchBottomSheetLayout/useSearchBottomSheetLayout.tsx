import { RootState } from "../../../../app/redux/store";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import { useRouter, useSearchParams } from "next/navigation";

const useSearchBottomSheetLayout = () => {
  const router = useRouter();
  const search = useAppSelector((state: RootState) => state.products.search);
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
