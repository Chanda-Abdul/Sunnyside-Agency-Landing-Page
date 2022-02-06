import React from "react";
import menu from "../images/icon-hamburger.svg";

const MenuButton = ({isOpen, setIsOpen}) => {
  return (
    <>
      <button onClick={()=> setIsOpen(!isOpen)} className="menu-btn">
        <img src={menu} alt="menu-button" />
      </button>
    </>
  );
};

export default MenuButton;
