import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TrueLikesIcon = ({ onClick, id }) => {
  return (
    <FontAwesomeIcon
      id={id}
      icon={faHeart}
      onClick={onClick}
      style={{ display: "none", color: "red" }}
      cursor="pointer"
    ></FontAwesomeIcon>
  );
};

export default TrueLikesIcon;
