import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const FalseLikesIcon = ({ onClick, id }) => {
  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={onClick}
      id={id}
      cursor="pointer"
      color="gray"
      style={{ marginRight: "10px" }}
    />
  );
};

export default FalseLikesIcon;
