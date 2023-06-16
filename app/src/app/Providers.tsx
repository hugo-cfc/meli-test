import { SearchContextProvider } from "./Context/searchContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SearchContextProvider>{children}</SearchContextProvider>;
};

export default Providers;
