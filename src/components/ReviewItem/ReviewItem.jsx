import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = (props) => {
  const { id, img, name, price, shipping, quantity } = props.product;
  const handledCartRemove = props.handledCartRemove;
  return (
    <div className="rounded-lg flex items-center border shadow p-2">
      <div className="thumb h-full rounded-md">
        <img className="w-28 h-full rounded-md" src={img} alt="" />
      </div>
      <div className="item-info-box flex items-center justify-between w-full p-2">
        <div className="item-info">
          <h1 className="text-xl text-[#1C2B35]">{name}</h1>
          <h3 className="text-[#1C2B35] text-base">
            Price: <span className="text-[#FF9900]">${price}</span>
          </h3>
          <p className="text-[#1C2B35] text-base">
            Shipping Charge:{" "}
            <span className="text-[#FF9900]"> ${shipping}</span>
          </p>
          <p className="text-[#1C2B35] text-base">
            Quantities:{" "}
            <span className="text-[#FF9900]">
              {" "}
              {quantity} <sub>(pcs)</sub>
            </span>
          </p>
        </div>
        <div className="remove ml-auto">
          <button
            onClick={() => handledCartRemove(id)}
            className="bg-[#EB57574D] w-14 h-14  rounded-full"
          >
            <FontAwesomeIcon
              className="text-[#EB5757] text-2xl"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
