const INITIAL_STATE = {
userData:{
  email:"",
  userId:""
},

postData:[]
};

console.log(INITIAL_STATE)

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case "LOGIN_USER_DATA":
    return {...state,userData:{...state.userData,email:action.payload.email,
      userId:action.payload.uid}}
      case "ADD_POST":
        return {...state,postData:[...state.postData,...action.payload]}

        case "POST_DATA_FROM_LS":
          return {...state,postData:action.payload}

  //         case "DELETE_ITEM": 
  //           return {...state.postData, state.postData : state.postData.splice(item.index, 1)};
           
  }
  return state;
}

export default reducer;
