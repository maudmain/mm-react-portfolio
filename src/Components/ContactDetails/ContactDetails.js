// Importing style
import "./contactDetails.css";

// Importing the necessary packages from React
import React from "react";

// Importing component
import ButtonMailto from "../Links/EmailLink";

const ContactDetails = () => {
  return (
    <div className="details">
      <div className="details-content">
        <h1>or contact this way: </h1>
        <div className="email-link">
          <ButtonMailto
            label="Write me an E-Mail"
            mailto="mailto:117314424+maudmain@users.noreply.github.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
