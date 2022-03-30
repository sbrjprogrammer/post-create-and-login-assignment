import { render } from "@testing-library/react";
import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import Input from "../component/input";
import Button from "../component/button";
import {useLocation} from 'react-router-dom'

const HomeComp = (prop) => {

    const [postData,setPostData]= useState({
        postName:"",
        postDetail:"",
        postImgUrl:"",
        postPrice:"",
    })

console.log(prop);

const location = useLocation();

console.log(location,'location')
       
useEffect(()=>{
let userData = JSON.parse(localStorage.getItem('loginUser'));
prop.dispatch({type:"LOGIN_USER_DATA",payload:userData});


let postData = JSON.parse(localStorage.getItem('postData'));
prop.dispatch({type:"POST_DATA_FROM_LS",payload:postData})

},[])


const setField = (val,propName) => {
    setPostData({...postData,[propName]: val})
}

const addPost = ()=>{
let postDb = {...postData,postUserId:prop.userId};
console.log(postDb,'postDb');

let arr = []

let oldPostData = localStorage.getItem("postData");
if(oldPostData == null){
arr.push(postDb);
localStorage.setItem("postData", JSON.stringify(arr));
prop.dispatch({type:"ADD_POST",payload:arr})
}
else{
    let oldArr = JSON.parse(oldPostData);
    oldArr.push(postDb);
    localStorage.setItem("postData", JSON.stringify(oldArr));
    prop.dispatch({type:"ADD_POST",payload:[postDb]})
}
}
     


    return <div>
        <h1>Home - User Details</h1>

        <div>

        <h1>Add Post</h1>
        <Input
        tp={"text"}
        plHd={"Enter Post Name"}
        inpVal={postData.postName}
        onChg={(val)=>setField(val,"postName")}
        />
                <Input
        tp={"text"}
        plHd={"Enter Post Detail"}
        inpVal={postData.postDetail}
        onChg={(val)=>setField(val,"postDetail")}
        />
                <Input
        tp={"text"}
        plHd={"Enter Post Price"}
        inpVal={postData.postPrice}
        onChg={(val)=>setField(val,"postPrice")}
        />
                <Input
        tp={"text"}
        plHd={"Enter Post Image Url"}
        inpVal={postData.postImgUrl}
        onChg={(val)=>setField(val,"postImgUrl")}
        />
             <Button
        btnFunc={addPost}
        btnText={"Add Post"}
        />
        </div>


{
    prop.postData && prop.postData.map((val,ind)=>{
        return <div style={{height:250,width:150,border:"1px solid black"}}>
<img src={val.postImgUrl} style={{width:100,height:100}}/>
<p>{val.postName}</p>
<p>{val.postDetail}</p>
<p>{val.postPrice}</p>
<div>
{
val.postUserId == prop.userId ? 
<p>Delete</p>
:null
}
    </div>
            </div>
    })
}



    </div>

}

const mapReduxStateToProps = (state) => {
    console.log(state,'state')
        return {
       email:state.authenReducer?.userData?.email,
       userId:state.authenReducer?.userData?.userId,
       postData:state.postReducer?.postData
        };
      };
    

const newApp = connect(mapReduxStateToProps)(HomeComp);
export default newApp;
