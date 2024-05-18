import React, { useState } from "react";
import MenuButton from "../assets/menu-button.svg";
import CloseButton from "../assets/close-button.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  return (
    <div className="menu-button-mobile">
      {!showMenu && (
        <img
          src={MenuButton}
          height={"38px"}
          width={"38px"}
          alt="Open menu button"
          className="menu-button"
          onClick={handleClick}
        />
      )}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5 }}
          className="sidebar"
        >
          <img
            src={CloseButton}
            height={"28px"}
            width={"28px"}
            alt="Close menu button"
            className="close-menu-button"
            onClick={handleClick}
          />
          <div className="nav-list">
            <li className="active">
              <Link to="/" >
                Home
              </Link>
            </li>
            <li className="active">
              <Link to="/categories" >
                Categories
              </Link>
            </li>
            <li className="active">
              <Link to="/videos" >
                Images
              </Link>
            </li>
            <li className="active">
              <Link to="/signin" style={{ color: "black" }}>
                Sign In
              </Link>
            </li>
          </div>
        </motion.div>
      )}
    </div>
  );
};
