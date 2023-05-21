import React, { useContext, useState } from "react";
import googleIcon from "../../assets/img/google-icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import { ToastMsg } from "../Toast/ToastMsg";

const Login = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname;

  const { googleUser, login } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handledLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");

    login(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        setSuccess("User login successful!");
        ToastMsg("User login successful!");
        event.target.reset();

        navigate(from);
      })
      .catch((error) => {
        console.error("login-error: ", error.message);

        const userNotFound = error.message.includes("user-not-found");

        userNotFound && setError("User not found! Please sign up now");
      });
  };

  // Sign in google pop up

  const handledGoogleUser = () => {
    googleUser()
      .then((res) => {
        const googleUser = res.user;
        setSuccess("Successfuly created an account!");

        navigate(from);
      })
      .catch((error) => {
        console.error("google-error: ", error.message);
      });
  };
  return (
    <div className="mt-6">
      {error && (
        <div className="w-fit p-4 rounded-lg bg-red-200 text-center mx-auto">
          <p className="text-red-600 font-bold flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faWarning}></FontAwesomeIcon> {error}
          </p>
        </div>
      )}

      {success && (
        <div className="w-fit p-4 rounded-lg bg-green-200 text-center mx-auto">
          <p className="text-green-600 font-bold flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faUserCheck}></FontAwesomeIcon> {success}
          </p>
        </div>
      )}

      <div className="w-4/12 mx-auto mt-10 p-10 border border-[#95A0A7] rounded-lg shadow-[-12px 12px #FFE0B3] login-box-shadow flex flex-col">
        <h1 className="text-[#2A414F] text-4xl text-center">Login</h1>
        <form onSubmit={handledLogin} className="mt-8">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#2A414F]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#2A414F]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-[#0E161A] bg-[#FF99004D] hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-xl w-full px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 hover:text-white dark:focus:ring-orange-800"
          >
            Login
          </button>

          <p className="text-center mt-2">
            <small>
              New to Ema-john?{" "}
              <Link to={"/sign-up"}>
                <button className="text-[#FF9900]"> Create New Account</button>
              </Link>
            </small>
          </p>
          <div className="w-full h-1 relative">
            <hr className="border-t-2 border-[#95A0A7] w-full mt-8 " />
            <span className="text-[#95A0A7] bg-white px-6 absolute top-[-12px] left-[45%]">
              or
            </span>
          </div>
          <button
            onClick={handledGoogleUser}
            className="w-full py-3 rounded-md border border-[#95A0A7] mt-8 flex items-center justify-center gap-2"
          >
            <img src={googleIcon} alt="" className="w-[32px] h-[32px] " />
            <span className="text-[#2A414F]">Countinue with google</span>
          </button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Login;
