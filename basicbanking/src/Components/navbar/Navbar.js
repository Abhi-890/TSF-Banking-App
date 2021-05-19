import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./simple-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: "rgb(7,7,7)" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/customers"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/transactions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Transactions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
