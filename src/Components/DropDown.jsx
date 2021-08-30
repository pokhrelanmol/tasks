import React, { useContext, useState,useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { RouteContext } from "../context/RoutesContext";
import "../css/dropDown.css";
const DropDown = () => {
const history= useHistory()
  const { _, setRoute } = useContext(RouteContext);
  const handleChange = (e) => {
  setRoute(e.target.value)
  history.push(`/${e.target.value}`)
  };

  
  return (
    <>
      <div className="dropdown">
        <select id="select" onChange={handleChange}>
          <option> --What You Want To See--</option>
          <option value="imageDetailsOnMouseMove">magical image</option>
          <option value="creditCard">Credit Card</option>
          <option value="showInputOnEnter">Show Input On Enter</option>
          <option value="progressCircle">Progress Circle</option>
          <option value="loadingCircle">Loading Circle</option>
        </select>
      </div>
    </>
  );
};

export default DropDown;
