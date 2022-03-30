import React from "react";
import { useState } from "react";
import Input from "../component/input";
import Button from "../component/button";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "../App.css";
import {loginFuncs} from '../store/action/authAction'

const LoginCom = (prop) => {
  console.log(prop);
  const history = useHistory();

  const [data, setData] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const setField = (val, propName) => {
    setLogin({ ...login, [propName]: val });
  };

  const updateFunc = () => {};

  const loginFunc = () => {

    prop.dispatch(loginFuncs(login.email,login.password,history))
  //   let oldData = localStorage.getItem("userData");
  //   let flagUser = false;
  //   if (oldData == null) {
  //     // oldData = [];
  //     // oldData.push(signUp);
  //     // localStorage.setItem("userData", JSON.stringify(oldData));
  //     alert("No user is registered");
  //   } else {
  //     let oldArr = JSON.parse(oldData);
  //     for (var i = 0; i < oldArr.length; i++) {
  //       if (
  //         login.email === oldArr[i].email &&
  //         login.password === oldArr[i].password
  //       ) {
  //         console.log(oldArr[i]);
  //         prop.dispatch({ type: "LOGIN_USER_DATA", payload: oldArr[i] });
  //         setData(oldArr[i].email);
  //         localStorage.setItem("loginUser", JSON.stringify(oldArr[i]));
  //         history.push("/home", { userDatasss: "hammad" });

  //         flagUser = true;
  //       }
  //     }
  //     if (!flagUser) {
  //       console.log("Email or password is incorrect");
  //     }
  //   }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="container-heading">
          <div className="content">
            <Input
              tp={"email"}
              plHd={"Enter Your Email"}
              inpVal={login.email}
              onChg={(val) => setField(val, "email")}
            />
            <Input
              tp={"password"}
              plHd={"Enter Your Password"}
              inpVal={login.password}
              onChg={(val) => setField(val, "password")}
            />
            <Button btnFunc={loginFunc} btnText={"login"} />
            <p>{data}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const newApp = connect()(LoginCom);
export default newApp;
