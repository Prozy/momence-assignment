import React from "react";

import { Header } from "./components/Header";
import { App as AppContainer } from "./components/ui/App";
import { Content } from "./components/Content";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Content />
    </AppContainer>
  );
};

export default App;
