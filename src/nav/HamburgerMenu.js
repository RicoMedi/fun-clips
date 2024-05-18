import React, { useState } from "react";
import MenuButton from "../assets/menu-button.svg";
import CloseButton from "../assets/close-button.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
    const sidebar = document.querySelector('.sidebar');
    if (showMenu) {
      sidebar.style.display = 'none'; // Hide the sidebar when showMenu is true
    } else {
      sidebar.style.display = 'block'; // Show the sidebar when showMenu is false
    }
  };
  return (
    <div className="menu-button-mobile" onClick={handleClick}>
    <motion.div
        animate={{
          opacity: showMenu ? 1 : 0, // Set opacity to 0 when not showing the menu
          x: showMenu ? "0%" : "100%", // Slide in when showMenu is true
        }}
        transition={{ duration: 0.5 }}
        className="sidebar"
      >
        {showMenu && (
          <img
            src={CloseButton}
            height={"28px"}
            width={"28px"}
            alt="Close menu button"
            className="close-menu-button"
            onClick={handleClick}
          />
        )}
        <div className="nav-list">
          <li className="active">
            <Link to="/" style={{ color: "black" }}>
              Home
            </Link>
          </li>
          <li className="active">
            <Link to="/categories" style={{ color: "black" }}>
              Categories
            </Link>
          </li>
          <li className="active">
            <Link to="/videos" style={{ color: "black" }}>
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
      {!showMenu && (
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
