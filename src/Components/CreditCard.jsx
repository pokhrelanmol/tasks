import React from "react";
import "../css/creditCard.css";
import Tilt from "react-tilt";
const CreditCard = () => {
  return (
    <div className="main-div">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <div className="center-div">
            <div className="top-div">
              <h2>Credit</h2>
              <h1> visa</h1>
            </div>
            <div className="bottom-div">
              <h2>Anmol Pokhrel</h2>
              <p>4509-8902-8390-8902</p>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default CreditCard;
