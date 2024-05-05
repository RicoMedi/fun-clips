import React, { useState } from "react";
import MenuButton from "../assets/menu-button.svg";
import CloseButton from "../assets/close-button.svg";
import { Link } from "react-router-dom";

export const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu-button-mobile" onClick={handleClick}>
      {showMenu ? (
        <div className="sidebar">
          <img
            src={CloseButton}
            height={"38px"}
            width={"38px"}
            alt="Close menu button"
            className="close-menu-button"
            onClick={handleClick}
          />
          <div className="nav-list">
            <li className="active" >
              <Link to="/" style={{color:'black'}}>
                Home
              </Link>
            </li>
            <li className="active">
              <Link to="/categories" style={{color:'black'}}>
                Categories
              </Link>
            </li>
            <li className="active">
              <Link to="/videos"style={{color:'black'}} >
                Videos
              </Link>
            </li>
            <li className="active">
              <Link to="/signin" style={{color:'black'}} >
                Sign In
              </Link>
            </li>
          </div>
        </div>
      ) : (
        <img
          src={MenuButton}
          height={"38px"}
          width={"38px"}
          alt="Open menu button"
          className="menu-button"
        />
      )}
    </div>
  );
};
