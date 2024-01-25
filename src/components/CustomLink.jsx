import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ text, link }) => {
  return (
    <Link to={link} className="text-sea font-semibold text-lg">
      {text}
    </Link>
  );
};

export default CustomLink;
