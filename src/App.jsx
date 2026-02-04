import { useState } from "react";
import "./App.css";
import Routing from "./Routing";
import PageFooter from "./components/footer/PageFooter";

function App() {
  return (
    <>
      <Routing />
      <PageFooter />
    </>
  );
}

export default App;
