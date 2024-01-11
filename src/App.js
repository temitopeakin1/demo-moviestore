import React, { useState } from "react";
import "./App.css";
import SearchField from "./components/search/search.component";
import DisplayResult from "./components/display/display.components";
import Header from "./components/header/header.component";
import NomineeList from "./components/nominee-list/nominee.component";
import { Route, Routes } from "react-router-dom";

function App() {
  const [results, updateResults] = useState([]);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<SearchField updateResults={updateResults} />} />
        <Route path="/nominees" element={<NomineeList />} />
      </Routes>

      {/* DisplayResult can be rendered outside the Routes if it's not a route */}
      <DisplayResult results={results} />
    </div>
  );
}

export default App;
