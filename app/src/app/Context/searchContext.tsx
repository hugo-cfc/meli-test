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
  totalResults: number;
  setTotalResults: Dispatch<SetStateAction<number>>;
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
  availableFilters: Filter | null;
  setAvailableFilters: Dispatch<SetStateAction<Filter | null>>;
  filters: Filter[] | null;
  setFilters: Dispatch<SetStateAction<Filter[] | null>>;
}

const SearchContext = createContext<ContextProps>({
  totalResults: 0,
  setTotalResults: () => 0,
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
  availableFilters: null,
  setAvailableFilters: () => [],
  filters: null,
  setFilters: () => null,
});

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [totalResults, setTotalResults] = useState(0);
  const [products, setProducts] = useState<[] | Product[]>([]);
  const [isSorterDropdownOpen, setIsSorterDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<Sort | null>(null);
  const [availableSorts, setAvailableSorts] = useState<Sort[]>([]);
  const [filters, setFilters] = useState<Filter[] | null>(null);
  const [availableFilters, setAvailableFilters] = useState<Filter | null>(null);

  return (
    <SearchContext.Provider
      value={{
        totalResults,
        setTotalResults,
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
        filters,
        setFilters,
        availableFilters,
        setAvailableFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
