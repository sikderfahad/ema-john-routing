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
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AuthProvider, { AuthContext } from "./components/Providers/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <OrderReview></OrderReview>
          </PrivateRoute>
        ),
        loader: cartProductsLoader,
      },
      {
        path: "/procced-checkout",
        element: (
          <PrivateRoute>
            <ProccedCheck></ProccedCheck>
          </PrivateRoute>
        ),
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
