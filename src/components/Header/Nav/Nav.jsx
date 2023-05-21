import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ route }) => {
  return (
    <li className="inline mx-3">
      <NavLink
        to={route.path}
        className={({ isActive, isPending }) =>
          isActive ? "active nav" : isPending ? "pending nav" : "nav"
        }
      >
        {route.label}
      </NavLink>
    </li>
  );
};

export default Nav;
