import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const useSearchToolbar = () => {
  const pathname = usePathname().replace("/", "");
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(searchParams);

  useEffect(() => {
    queryParams.delete("modal-type");
  }, [queryParams]);

  const toolbarOptions = [
    {
      type: "sort",
      icon: <ArrowDownUp className="w-4" />,
      title: "Ordenar",
    },
    {
      type: "filter",
      icon: <SlidersHorizontal className="w-4" />,
      title: "Filtrar",
    },
  ];

  const handleOpenModal = (modalType: string) => {
    queryParams.set("modal-type", modalType);

    const params = queryParams.toString();

    router.push(`/${pathname}?${params}`, {
      shallow: true,
    });
  };

  return { handleOpenModal, pathname, toolbarOptions, router, searchParams };
};

export default useSearchToolbar;
