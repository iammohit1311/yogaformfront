import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/create";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
