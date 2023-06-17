import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const useSorterMobile = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(searchParams);

  useEffect(() => {
    queryParams.delete("modal-type");
  }, [queryParams]);

  const handleOpenModal = (modalType: string) => {
    queryParams.set("modal-type", modalType);

    const params = queryParams.toString();

    router.push(`${pathname}?${params}`, {
      shallow: true,
    });
  };

  return { handleOpenModal };
};

export default useSorterMobile;
