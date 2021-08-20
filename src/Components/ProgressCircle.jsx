import React, { useEffect, useState } from "react";
import "../css/progressCircle.css";

const ProgressCircle = () => {
  return (
    <>
    <input type="text"  />
      <div className="circular">
        <div className="inner"></div>
        <div className="circle">
           <div className="bar left">
              <div className="progress">

              </div>
           </div>
<div className="bar right">
              <div className="progress">

              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default ProgressCircle;
