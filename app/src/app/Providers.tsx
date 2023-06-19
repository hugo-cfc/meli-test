"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

import { SearchContextProvider } from "./Context/searchContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <SearchContextProvider>{children}</SearchContextProvider>
    </ReduxProvider>
  );
};

export default Providers;
