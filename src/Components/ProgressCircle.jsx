import React, { useEffect, useState } from "react";
import "../css/progressCircle.css";

const ProgressCircle = () => {
  const [value, setvalue] = useState('');
  const [stroke, setStroke] = useState("440");
  const handleChange = (e) => {
    setvalue(e.target.value);
    setStroke(value?440-value.length*2.44:440)
  };

  // useEffect(() => {
  //   setStroke(`${stroke - 2.44}`);
  // }, [value]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength="180"
      />
      <div className="box">
          <svg>
            <circle cy="70" cx="70" r="70"></circle>
            <circle
              cy="70"
              cx="70"
              r="70"
              style={{ strokeDashoffset: `${stroke}`, stroke: "black" }}
            ></circle>
          </svg>
        </div>
    </>
  );
};

export default ProgressCircle;
