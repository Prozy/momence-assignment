import React from "react";

import { Header } from "./components/Header";
import { AppUI as AppContainer } from "./components/ui/AppUI";
import { Content } from "./components/Content";
import { DataContextProvider } from "./data-access/DataContext";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <DataContextProvider>
        <AppContainer>
          <Header />
          <Content />
        </AppContainer>
      </DataContextProvider>
    </QueryClientProvider>
  );
};

export default App;
