import React from "react";
import { useNavigate } from "react-router-dom";
export const LoginBtn = () => {
  const navigate = useNavigate(); 
  const handleClick = ()=>{
    navigate("/login")
  }
  return (
    <div>
      <button onClick={handleClick}> Login </button>
    </div>
  );
};

