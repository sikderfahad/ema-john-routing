import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./OrderReview.css";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../MyDb/MyDb";
import ProccedCheckBtn from "../ExtraButton/ProccedCheckBtn";

const OrderReview = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handledCartRemove = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);

    console.log(cart);
  };

  const handledDeleteCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="review-container">
      <div className="selected-item w-10/12 mx-auto">
        <h1 className="text-2xl font-semibold text-orange-600 mt-6">
          Selected Products: {cart.length}
        </h1>

        <div className="grid grid-cols-1 gap-6 mt-8">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              handledCartRemove={handledCartRemove}
              key={product.id}
            ></ReviewItem>
          ))}
        </div>
      </div>
      <Cart cart={cart} handledDeleteCart={handledDeleteCart}>
        <ProccedCheckBtn></ProccedCheckBtn>
      </Cart>
    </div>
  );
};

export default OrderReview;
