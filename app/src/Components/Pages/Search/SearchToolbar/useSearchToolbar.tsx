import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import { useEffect } from "react";

const useSearchToolbar = () => {
  const pathname = usePathname().replace("/", "");
  const router = useRouter();
  const searchParams = useSearchParams();

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

  const queryParams = new URLSearchParams(searchParams);

  useEffect(() => {
    queryParams.delete("modal-type");
  }, [queryParams]);

  const handleOpenModal = (modalType: string) => {
    queryParams.set("modal-type", modalType);

    const params = queryParams.toString();

    router.push(`/${pathname}?${params}`, {
      shallow: true,
    });
  };

  return { handleOpenModal, pathname, toolbarOptions };
};

export default useSearchToolbar;
