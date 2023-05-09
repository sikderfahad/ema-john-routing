import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ route }) => {
  return (
    <li className="inline mx-3">
      {/* <Link
        className="py-4 px-3 rounded hover:bg-orange-500 duration-150 text-white font-medium"
        to={route.path}
      >
        {route.label}
      </Link> */}
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
