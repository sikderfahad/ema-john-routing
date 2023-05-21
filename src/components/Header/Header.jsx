import React, { useContext } from "react";
import logo from "../../assets/img/Logo.svg";
import Nav from "./Nav/Nav";
import { AuthContext } from "../Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Header = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/order", label: "Order" },
    { path: "/order-review", label: "Order Review" },
    { path: "/manage-inventory", label: "Manage Inventory" },
  ];

  const { user, logout } = useContext(AuthContext);

  const handledLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log("logout error: ", error.message));
  };

  return (
    <header className="bg-[#1C2B35] py-6">
      <nav className="w-10/12 mx-auto flex items-center justify-between">
        <div className="thumb">
          <img src={logo} alt="" className="" />
        </div>
        <div className="menu">
          <ul>
            {routes.map((route, idx) => (
              <Nav key={idx} route={route}></Nav>
            ))}

            {!user && (
              <li className="inline mx-3">
                <NavLink
                  to={"/login"}
                  className={({ isActive, isPending }) =>
                    isActive ? "active nav" : isPending ? "pending nav" : "nav"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {user && (
          <h1 className="text-[#ff9900] text-lg font-medium flex items-center gap-3">
            {user?.displayName}
            <button onClick={handledLogOut}>
              <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
            </button>
          </h1>
        )}
      </nav>
    </header>
  );
};

export default Header;
