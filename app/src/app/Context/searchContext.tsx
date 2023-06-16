"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";
import Product from "../../@types/Product";

interface ContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  isSorterModalOpen: boolean;
  setIsSorterModalOpen: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sort: string | null;
  setSort: Dispatch<SetStateAction<string | null>>;
}

const GlobalContext = createContext<ContextProps>({
  products: [],
  setProducts: () => [],
  isSorterModalOpen: false,
  setIsSorterModalOpen: () => false,
  search: "",
  setSearch: () => "",
  sort: "",
  setSort: () => "",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [products, setProducts] = useState<[] | Product[]>([]);
  const [isSorterModalOpen, setIsSorterModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<string | null>("");

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        isSorterModalOpen,
        setIsSorterModalOpen,
        search,
        setSearch,
        sort,
        setSort,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
