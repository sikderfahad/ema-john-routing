import {
  faShoppingCart,
  faStarHalf,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = (props) => {
  const { img, name, price, ratings, seller, id, ratingsCount } = props.product;

  const handledCart = props.handledCart;
  return (
    <div className="p-2 rounded-lg border shadow flex flex-col relative">
      <div className="thumb rounded">
        <img className="rounded" src={img} alt="" />
      </div>
      <div className="p-3">
        <h1 className="text-[#0E161A] text-xl">{name}</h1>
        <h3 className="text-[#0E161A] text-lg">
          <strong>Price: </strong> $<span>{price}</span>
        </h3>
        <div className="item-info mt-12 mb-3">
          <p className="text-[#2A414F] text-xs">
            <strong>Manufacture: </strong> {seller}
          </p>
          <p className="text-[#2A414F] text-xs">
            <strong>Rtings: </strong> {ratings}
            <FontAwesomeIcon
              className="text-yellow-500"
              icon={faStarHalfAlt}
            ></FontAwesomeIcon>
            <sub>({ratingsCount})</sub>
          </p>
        </div>
      </div>
      <br />
      <br />
      <button
        onClick={() => handledCart(props.product)}
        className="py-3 bg-green-600 hover:bg-green-500 hover:border-none duration-150 text-white font-semibold rounded-b-lg border border-[#95A0A7] mt-auto absolute w-full bottom-0 left-0"
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
