import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="nav">
      <h1 className="nav-title">FunClipz</h1>
      <div className="link-container">
        <Link to="/" className="home-link">
          Home
        </Link>

        <Link to="/" className="home-link">
          Categories
        </Link>

        <Link to="/" className="home-link">
          Videos
        </Link>
      </div>
    </div>
  );
};
