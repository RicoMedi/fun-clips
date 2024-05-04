import React from "react";
import { LoginBtn } from "../components/LoginBtn";
import { RegisterBtn } from "../components/RegisterBtn";
export const HomePage = () => {
  return (
    <div className="homeBtns">
      <LoginBtn />
      <RegisterBtn />
    </div>
  );
};


