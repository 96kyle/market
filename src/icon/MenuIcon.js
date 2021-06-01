import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuIcon = ({ onClick, id }) => {
  return (
    <>
      <FontAwesomeIcon id={id} icon={faBars} onClick={onClick} size="2x" />
    </>
  );
};

export default MenuIcon;
