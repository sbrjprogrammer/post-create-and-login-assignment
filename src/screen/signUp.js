import React from "react";
import { useState } from "react";
import Input from "../component/input";
import Button from "../component/button";
import {useHistory} from 'react-router-dom'


const SignUpCom = () => {

const history = useHistory()

    const [signUp, setSignUp] = useState({
        email: "",
        password: ""
    });

    
    const setField = (val, propName) => {
        setSignUp({ ...signUp, [propName]: val })   
    }


    const signUpFunc = () => {
       
//console.log(signUp,'signUp')
        // console.log(uid);
        
        let oldData = localStorage.getItem("userData")
        let flagUser = false;
        
        if (oldData == null) {
            oldData = [];
            let userData = {...signUp};
            userData.uid= Math.floor(Math.random()*10000)
            oldData.push(userData);
            localStorage.setItem("userData", JSON.stringify(oldData));
            history.push('/')
            console.log("user registered")

        }
        else {
           
            let oldArr = JSON.parse(oldData);
            for (var i = 0; i < oldArr.length; i++) {
                if (signUp.email == oldArr[i].email) {
                    console.log("Email address already exist");
                    flagUser = true;
                }
            }
            if (!flagUser) {
                let userData = {...signUp};
                userData.uid= Math.floor(Math.random()*10000)
                oldArr.push(userData);
                localStorage.setItem("userData", JSON.stringify(oldArr));
                history.push('/')
                console.log("user registered")
            }




        }
    }

    return (
        <div className="App">
      <div className="container">
        <div className="container-heading">
          <div className="content">
            <Input
              tp={"email"}
              plHd={"Enter Your Email"}
              inpVal={signUp.email}
              onChg={(val) => setField(val, "email")}
            />
            <Input
              tp={"password"}
              plHd={"Enter Your Password"}
              inpVal={signUp.password}
              onChg={(val) => setField(val, "password")}
            />
            <Button btnFunc={signUpFunc} btnText={"signup"} />
            {/* <p>{data}</p> */}
          </div>
        </div>
      </div>
    </div>
    )


}


export default SignUpCom;