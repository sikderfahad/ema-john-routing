import { faCreditCardAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProccedCheckBtn = () => {
  const navigate = useNavigate();
  const goProccedCheckPage = () => navigate("/procced-checkout");
  return (
    <button
      onClick={goProccedCheckPage}
      className="bg-[#FF9900] text-white p-4 rounded w-full font-medium flex items-center justify-between"
    >
      <span className="flex items-center justify-center gap-3">
        Procced Checkout{" "}
      </span>{" "}
      <FontAwesomeIcon
        className="text-xl"
        icon={faCreditCardAlt}
      ></FontAwesomeIcon>
    </button>
  );
};

export default ProccedCheckBtn;
