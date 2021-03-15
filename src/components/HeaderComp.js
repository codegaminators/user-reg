import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComp = () => {
  return (
    <header>
      <nav className="navbar ">
        <NavLink to="/" className="nav-brand">
          <img src="/images/logo.svg" alt="" />
        </NavLink>

        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Attend
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComp;
