import React from "react";

export const Menu = ({ children }) => {
  return (
    <div className="absolute w-[38px] -bottom-[24px] z-10 select-none ">
      {children}
    </div>
  );
};

export const MenuItem = ({ onClick, last, children }) => {
  return <div onClick={onClick}>{children}</div>;
};

export default Menu;
