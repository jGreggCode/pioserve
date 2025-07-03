import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { getBgColor } from "../../utils";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: getBgColor() }}
              key={menu.id}
              onClick={() => setSelected(menu)}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
