import { useState } from "react";
import PropTypes from "prop-types";
import logoIcon from "../../assets/way2heady.png";
import "./AgeVerification.css";

function AgeVerification({ onConfirm }) {
  const [ageVerificationState, setAgeVerificationState] = useState("initial"); // 'initial', 'denied', 'confirmed'

  const handleYesClick = () => {
    onConfirm();
    setAgeVerificationState("confirmed");
  };

  const handleNoClick = () => {
    setAgeVerificationState("denied");
  };

  return (
    <div className="age-verification">
      {ageVerificationState === "initial" && (
        <>
          <img
            src={logoIcon}
            alt="Way2Heady Logo"
            className="age-verification-logo"
          />
          <h2>You must be over 21 to access this website.</h2>
          <p>Are you over 21 years of age?</p>
          <div className="button-container">
            <button onClick={handleYesClick}>YES</button>
            <button onClick={handleNoClick}>NO</button>
          </div>
        </>
      )}
      {ageVerificationState === "denied" && (
        <h2>You are not old enough to view this content.</h2>
      )}
    </div>
  );
}
// Define onConfirm as a required function prop
AgeVerification.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default AgeVerification;
