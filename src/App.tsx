import React from "react";

import { Header } from "./components/Header";
import { AppUI as AppContainer } from "./components/ui/AppUI";
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
