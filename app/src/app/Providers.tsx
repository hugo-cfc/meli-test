"use client";

import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

import { store } from "./redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={1} preventDuplicate>
        {children}
      </SnackbarProvider>
    </Provider>
  );
};

export default Providers;
