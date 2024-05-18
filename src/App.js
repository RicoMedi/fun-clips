import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { NavBar } from "./nav/NavBar";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
