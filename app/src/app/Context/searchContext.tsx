"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";
import Filter from "../../@types/Filter";

interface ContextProps {
  isSorterDropdownOpen: boolean;
  setIsSorterDropdownOpen: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  availableFilters: Filter | null;
  setAvailableFilters: Dispatch<SetStateAction<Filter | null>>;
  filters: Filter[] | null;
  setFilters: Dispatch<SetStateAction<Filter[] | null>>;
}

const SearchContext = createContext<ContextProps>({
  isSorterDropdownOpen: false,
  setIsSorterDropdownOpen: () => false,
  search: "",
  setSearch: () => "",
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
  const [isSorterDropdownOpen, setIsSorterDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filter[] | null>(null);
  const [availableFilters, setAvailableFilters] = useState<Filter | null>(null);

  return (
    <SearchContext.Provider
      value={{
        isSorterDropdownOpen,
        setIsSorterDropdownOpen,
        search,
        setSearch,
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
