import { GlobalContextProvider } from "./Context/searchContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};

export default Providers;
