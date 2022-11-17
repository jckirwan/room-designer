import React from "react";

export const Menu = ({ children }) => {
  return (
    <div className="absolute w-[123px] -bottom-[25px] z-10 select-none inline-flex border border-black bg-gray-200 ">
      {children}
    </div>
  );
};

export const MenuItem = ({ onClick, last, children }) => {
  return (
    <div onClick={onClick} className="border-r border-black">
      {children}
    </div>
  );
};

export default Menu;
