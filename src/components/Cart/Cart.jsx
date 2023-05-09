import {
  faLongArrowAltRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = ({ cart, handledDeleteCart, children }) => {
  const totalPrice = cart.reduce((x, p) => x + p.price * p.quantity, 0);
  const shippingCharge = cart.reduce((x, p) => x + p.shipping * p.quantity, 0);
  const tax = totalPrice * (10 / 100);
  const grandTotalPrice = totalPrice + shippingCharge + tax;
  return (
    <div className="p-4 h-[100vh] rounded-lg bg-[#FF99004D] sticky top-3">
      <h1 className="text-center text-2xl w-fit mx-auto border-b-2 border-[#1C2B35]">
        Order Summery
      </h1>
      <div className="order-info mt-12 flex flex-col gap-4">
        <div>
          <p>
            Selected item:{" "}
            <strong>{cart.reduce((x, p) => x + p.quantity, 0)}</strong>
          </p>
        </div>
        <div>
          <p>
            Total price: <strong>${totalPrice.toFixed(2)}</strong>
          </p>
        </div>
        <div>
          <p>
            Total shipping charge: <strong>${shippingCharge}</strong>
          </p>
        </div>
        <div>
          <p>
            Tax: <strong>${tax.toFixed(2)}</strong>
          </p>
        </div>
        <div className="">
          <p className="text-xl font-semibold">
            Grand Total: <strong>${grandTotalPrice.toFixed(2)}</strong>
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          <button
            onClick={handledDeleteCart}
            className="bg-[#FF3030] text-white p-4 mt-12 rounded w-full font-medium flex items-center justify-between"
          >
            <span className="flex items-center justify-center gap-3">
              Clear Cart{" "}
              <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
            </span>{" "}
            <FontAwesomeIcon
              className="text-xl"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Cart;
