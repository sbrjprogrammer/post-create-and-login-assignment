import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "../screen/profile";
import Home from "../screen/home";
import SignUp from "../screen/signUp";
// import newApp from "../screen/home";
import LoginCom from "../screen/login";
import {PrivateRoute,PublicRoute} from "./privateRoute";
import newApp from "../screen/home";
import SignUpCom from "../screen/signUp";


 function RouterApp() {
  return (
    <Router>
        <Switch>
          <PublicRoute path="/" exact>
           <LoginCom />
          </PublicRoute>


          <PublicRoute path="/signup">
            <SignUpCom/>
          </PublicRoute>
          

          <PrivateRoute exact path="/profile">
             <Profile />
           </PrivateRoute>

           
           <PrivateRoute exact path="/home">
             <Home />
           </PrivateRoute>

        </Switch>
    </Router>
  );
}

export default RouterApp;