import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
export const NavBar = () => {
  
  return (
    <div className="nav">
      <h1 className="nav-title">FunClipz</h1>
      
      <div className="regular-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/" className="nav-link">
          Categories
        </Link>

        <Link to="/" className="nav-link">
          Videos
        </Link>
        <Link to="/signin" className="nav-link">
          Sign In
        </Link>
      </div>
      <HamburgerMenu />
    </div>
  );
};
