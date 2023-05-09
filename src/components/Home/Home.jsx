import React, { useEffect, useState } from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../MyDb/MyDb";
import ReviewOrderBtn from "../ExtraButton/ReviewOrderBtn";

const Home = () => {
  const products = useLoaderData();
  //   console.log(products);

  const [cart, setCart] = useState([]);

  const handledCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity += 1;
      const restProduct = cart.filter((pd) => pd.id !== product.id);
      newCart = [...restProduct, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((pd) => pd.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handledDeleteCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="cart-container w-10/12 mx-auto">
        <h1 className="text-3xl font-bold mt-6">
          Choice our best product for you:{" "}
          <span className="text-rose-600">
            {products.length} <sub>Item</sub>
          </span>
        </h1>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handledCart={handledCart}
            ></Product>
          ))}
        </div>
      </div>
      <Cart cart={cart} handledDeleteCart={handledDeleteCart}>
        <ReviewOrderBtn></ReviewOrderBtn>
      </Cart>
    </div>
  );
};

export default Home;
