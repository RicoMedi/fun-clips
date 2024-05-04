import React from "react";
import { useNavigate } from "react-router-dom";
export const RegisterBtn = () => {
  const navigate = useNavigate(); 
  const handleClick = ()=>{
    navigate("/register")
  }
  return (
    <div>
      <button onClick={handleClick}> Register </button>
    </div>
  );
};
