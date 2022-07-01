// import logo from './logo.svg';
import './App.css';
import React from "react";
import SiteContainer from "./sitecontainer";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<SiteContainer />} />
      </Routes> */}
      <SiteContainer />
    </div>
  );
}

export default App;
