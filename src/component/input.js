import React from "react";
import SignUp from "../screen/signUp";



const InputCom = ({tp,plHd,inpVal,onChg}) => {
    return <input size={40}
    type={tp}
    placeholder={plHd}
    defaultValue={inpVal}
    onChange={ (e) => onChg(e.target.value)}

    />

}


export default InputCom;