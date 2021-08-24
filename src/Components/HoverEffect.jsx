import React, { useState } from "react";
import "../css/hoverEffect.css";
const HoverEffect = () => {
  const [show, setShow] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: "", y: "" });
  const handleMouseMove = (e) => {
    setShow(true);
    setCoordinates({ x: e.clientX, y: e.clientY });
  };
  return (
    <div >
    <div className="image-div">
      <img
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShow(false)}
        src="https://www.usnews.com/dims4/USNEWS/a1026a2/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F69%2F2f3bafb20205adb5bbb42e999b354b%2Ftag%3Areuters.com%2C2021%3Anewsml_LYNXMPEH7A0Z7%3A12021-08-11T164416Z_1_LYNXMPEH7A0Z7_RTROPTP_3_AFGHANISTAN-CONFLICT-TALIBAN.JPG"
      />
 
    </div>
     {show ? (
        <p
          style={{ left: coordinates.x, top: coordinates.y }}
          className="message"
        >
          taliban captures afghanistan completely
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default HoverEffect;
