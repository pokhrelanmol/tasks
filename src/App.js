import React, { useContext, useEffect, useState } from "react";
import ContenrEditable from "./Components/ContenrEditable";
import ShowImageDetailsOnMouseMove from "./Components/ShowImageDetailsOnMouseMove";
import CreditCard from "./Components/CreditCard";
import ProgressCircle from "./Components/ProgressCircle";
import LoadingCircle from "./Components/LoadingCircle";
import DropDown from "./Components/DropDown";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RouteContext } from "./context/RoutesContext";

const App = () => {
 const {route} = useContext(RouteContext) 
 console.log(route)
  return (
    <BrowserRouter>
      <DropDown />
      <Switch>
            
        <Route exact path={"/creditCard"}>
          <CreditCard/> 
        </Route>
        
      
        <Route  exact path="/progressCircle" component={ProgressCircle} />
        <Route  exact path="/showInputOnEnter" component={ContenrEditable} />
        <Route  exact path="/loadingCircle" component={LoadingCircle} />
        <Route exact 
          path="/imageDetailsOnMouseMove"
           component={ShowImageDetailsOnMouseMove}
        />
        <Route component={()=>{ return <h1> Opps! Page Not Found</h1>}}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
