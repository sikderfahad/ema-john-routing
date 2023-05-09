import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import OrderReview from "./components/OrderReview/OrderReview";
import { cartProductsLoader } from "./components/CustomLoader/CartProductsLoader/CartProductsLoader";
import ProccedCheck from "./components/ProccedCheckout/ProccedCheck";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/order-review",
        element: <OrderReview></OrderReview>,
        loader: cartProductsLoader,
      },
      {
        path: "/procced-checkout",
        element: <ProccedCheck></ProccedCheck>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
