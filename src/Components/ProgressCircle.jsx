import React, { useState } from "react";
import "../css/progressCircle.css";

export default function ProgressCircle() {
  const[value, setValue] = useState('');
  const[stroke, setStroke] = useState("440");
  const handleChange = (e) => {
    setValue(e.target.value);
    const strokeVal =value?440-value.length*2.44:440 
    setStroke(strokeVal)
  };

  

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

