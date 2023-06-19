import { useRouter, useSearchParams } from "next/navigation";

import { setIsSorterDropdownOpen } from "../app/redux/Features/productsSlice";
import { RootState } from "../app/redux/store";
import urlGenerator from "../utils/urlGenerator";
import { useAppDispatch, useAppSelector } from "./reduxHooks/reduxHooks";

const useSorter = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const search = useAppSelector((state: RootState) => state.products.search);
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

    dispatch(setIsSorterDropdownOpen(false));

    queryParams.delete("modal-type");

    router.push(generatedUrl);
  };

  return { handleClickOnSortOption };
};

export default useSorter;
