import { useState } from "react";
import "./App.css";
import Routing from "./Routing";
import PageFooter from "./components/footer/PageFooter";
import PageHeader from "./components/header/PageHeader";

function App() {
  return (
    <>
      <PageHeader />
      <Routing />
      <PageFooter />
    </>
  );
}

export default App;
