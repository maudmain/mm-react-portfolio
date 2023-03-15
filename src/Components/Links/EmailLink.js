// Importing the necessary packages from React
import React from "react";
import { Link } from "react-router-dom";

// Component to generate a mailto link, using 2 props (mailto and label) so on click is triggered it sets the loctation the mailto email address supplied
const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
