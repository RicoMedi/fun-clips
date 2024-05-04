import React from "react";
import "./Home.css";
import { LoginBtn } from "../components/LoginBtn";
import { RegisterBtn } from "../components/RegisterBtn";
export const HomePage = () => {
  return (
    <div className="home-container">
      <div className="button-container">
        <h2 className="home-text">Welcome</h2>
        <LoginBtn />
        <RegisterBtn />
      </div>
    </div>
  );
};
