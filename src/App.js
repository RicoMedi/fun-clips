import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./form/LoginForm";
import { RegisterForm } from "./form/RegisterForm";
import {HomePage} from "./home/HomePage";
import {NavBar} from "./nav/NavBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
        </div>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
