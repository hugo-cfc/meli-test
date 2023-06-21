import { useRouter, useSearchParams } from "next/navigation";

import { RootState } from "../../../../app/redux/store";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";

const useSearchBottomSheetLayout = () => {
  const router = useRouter();
  const search = useAppSelector((state: RootState) => state.products.search);
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(searchParams);

  const params = queryParams.toString();

  const handleCloseModal = () => {
    queryParams.delete("modal-type");

    router.push(`/${search}?${params}`, {
      shallow: true,
    });
  };

  return { handleCloseModal, router };
};

export default useSearchBottomSheetLayout;
