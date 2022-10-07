import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  let activeClassName="nav-active"

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="kidsports/"
                className={({isActive})=> isActive && activeClassName}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="kidsports/About"
                className={({isActive})=> isActive && activeClassName}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="kidsports/Blog"
                className={({isActive})=> isActive && activeClassName}
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="kidsports/Contact"
                className={({isActive})=> isActive && activeClassName}
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;