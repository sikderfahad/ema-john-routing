import React from "react";
import logo from "../../assets/img/Logo.svg";
import Nav from "./Nav/Nav";
const Header = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/order", label: "Order" },
    { path: "/order-review", label: "Order Review" },
    { path: "/manage-inventory", label: "Manage Inventory" },
    { path: "/login", label: "Login" },
  ];
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
