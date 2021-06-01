import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserIcon = ({ id, onClick }) => {
  return (
    <FontAwesomeIcon
      id={id}
      icon={faUser}
      size="2x"
      style={{ display: "none", float: "right" }}
      onClick={onClick}
      cursor="pointer"
    ></FontAwesomeIcon>
  );
};

export default UserIcon;
