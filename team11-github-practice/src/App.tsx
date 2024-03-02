import React from "react";
import "./style.scss";
import Massara from "./components/Massara";
import HiromuTest from "./components/HiromuTest";
import FirestoreTest from "./components/FirestoreTest";

function App() {
  return (
    <div className="App">
      <HiromuTest />
      <Massara />
      <FirestoreTest/>
    </div>
  );
}

export default App;
