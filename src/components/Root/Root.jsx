import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import ToastBox from "../Toast/ToastBox";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastBox></ToastBox>
    </div>
  );
};

export default Root;
