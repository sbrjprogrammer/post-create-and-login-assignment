import ActionType from '../constant/constant'

const loginFuncs = (email,password,history) => {
    return (dispatch) => {
    let oldData = localStorage.getItem("userData");
    let flagUser = false;
    if (oldData == null) {
        // oldData = [];
        // oldData.push(signUp);
        // localStorage.setItem("userData", JSON.stringify(oldData));
        alert("No user is registered")
    }
    else {
        let oldArr = JSON.parse(oldData);
        for (var i = 0; i < oldArr.length; i++) {
            if (email === oldArr[i].email && password === oldArr[i].password) {
                dispatch({type:ActionType.LOGIN_USER_DATA,payload:oldArr[i]})
                // setData(oldArr[i].email);
                localStorage.setItem("loginUser", JSON.stringify(oldArr[i]));
                history.push('/home',{userDatasss:"hammad"})
    


                flagUser = true;
            }    
        }
        if (!flagUser) {
            console.log("Email or password is incorrect")
        }




    }
    
}
}

export {loginFuncs}