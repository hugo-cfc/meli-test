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
import Sort from "../../@types/Sort";
import Filter from "../../@types/Filter";

interface ContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  isSorterDropdownOpen: boolean;
  setIsSorterDropdownOpen: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  availableSorts: Sort[];
  setAvailableSorts: Dispatch<SetStateAction<Sort[]>>;
  sort: Sort | null;
  setSort: Dispatch<SetStateAction<Sort | null>>;
  availableFilters: Filter[];
  setAvailableFilters: Dispatch<SetStateAction<Filter[]>>;
  filter: Filter | null;
  setFilter: Dispatch<SetStateAction<Filter | null>>;
}

const SearchContext = createContext<ContextProps>({
  products: [],
  setProducts: () => [],
  isSorterDropdownOpen: false,
  setIsSorterDropdownOpen: () => false,
  search: "",
  setSearch: () => "",
  availableSorts: [],
  setAvailableSorts: () => [],
  sort: null,
  setSort: () => null,
  availableFilters: [],
  setAvailableFilters: () => [],
  filter: null,
  setFilter: () => null,
});

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [products, setProducts] = useState<[] | Product[]>([]);
  const [isSorterDropdownOpen, setIsSorterDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<Sort | null>(null);
  const [availableSorts, setAvailableSorts] = useState<Sort[]>([]);
  const [filter, setFilter] = useState<Filter | null>(null);
  const [availableFilters, setAvailableFilters] = useState<Filter[]>([]);

  return (
    <SearchContext.Provider
      value={{
        products,
        setProducts,
        isSorterDropdownOpen,
        setIsSorterDropdownOpen,
        search,
        setSearch,
        sort,
        setSort,
        availableSorts,
        setAvailableSorts,
        filter,
        setFilter,
        availableFilters,
        setAvailableFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
