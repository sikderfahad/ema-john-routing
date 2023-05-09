import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewOrderBtn = () => {
  const navigate = useNavigate();
  const goReviewPage = () => navigate("/order-review");
  return (
    <button
      onClick={goReviewPage}
      className="bg-[#FF9900] text-white p-4 rounded w-full font-medium flex items-center justify-between"
    >
      <span className="flex items-center justify-center gap-3">
        Review Order{" "}
      </span>{" "}
      <FontAwesomeIcon
        className="text-xl"
        icon={faLongArrowAltRight}
      ></FontAwesomeIcon>
    </button>
  );
};

export default ReviewOrderBtn;
