import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <h1 className="nav-title">Welcome To Medina Farms</h1>
      <div style={{ margin: "10px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontSize: ['20px'],
            color: isActive ? "black" : "red",
          })}
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};

