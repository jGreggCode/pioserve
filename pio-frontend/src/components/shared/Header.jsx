import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https"; // Adjust the import path as necessary
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom"; // Ensure you have this import
import { MdDashboard } from "react-icons/md";

const Header = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Ensure you have useNavigate imported from 'react-router-dom'
  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth"); // Adjust the navigation as necessary
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };
  return (
    <header className="flex justify-between items-center p-4 px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src={logo} className="h-8 w-8" alt="Logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Pioserve</h1>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] p-2 rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5] px-2 py-1 rounded-md"
        />
      </div>

      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        {userData.role === "Admin" && (
          <div
            onClick={() => navigate("/dashboard")}
            className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer "
          >
            <MdDashboard className="text-[#f5f5f5] text-2xl" />
          </div>
        )}
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer ">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-2xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">
              {userData.name || "TEST USER"}
            </h1>
            <p className="text-xs text-[#ababab]">{userData.role || "Role"}</p>
          </div>
          <IoLogOut
            onClick={handleLogout}
            className="text-[#f5f5f5]"
            size={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
