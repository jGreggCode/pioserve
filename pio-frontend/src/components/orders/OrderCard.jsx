import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[32%] bg-[#262626] p-4 rounded-lg mb-4">
      <div className="flex items-center gap-5">
        <button className="bg-primary p-3 text-xl font-bold rounded-lg">
          JG
        </button>
        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
              JGDEV
            </h1>
            <p className="text-[#ababab] text-sm">#101/Dine In</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
              <FaCheckDouble className="inline mr-2" /> Ready
            </p>
            <p className="text-[#ababab] text-sm">
              <FaCircle className="inline mr-2 text-green-600" /> Ready to serve
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 text-[#ababab] text-sm">
        <p>July 3, 2025 12:34 PM</p>
        <p>8 Items</p>
      </div>
      <hr className="w-full mt-4 border-t border-gray-500" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#f5f5f5] text-lg font-semibold">Total</h1>
        <p className="text-[#f5f5f5] text-lg font-semibold">P250.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
