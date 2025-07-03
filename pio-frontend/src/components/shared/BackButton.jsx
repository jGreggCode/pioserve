import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-primary p-2 text-xl font-bold rounded-lg text-white"
    >
      <IoArrowBackOutline />
    </button>
  );
};

export default BackButton;
