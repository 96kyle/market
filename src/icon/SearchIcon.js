import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchIcon = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faSearch}
      color="gray"
      style={{ position: "absolute", left: "51%" }}
      onClick={onClick}
    ></FontAwesomeIcon>
  );
};

export default SearchIcon;
