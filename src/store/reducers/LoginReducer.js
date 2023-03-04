import {
    LOGIN_SUCCESSFUL, LOGOUT
}  from "../../AppConsts"

  const initialState = {
    isLoggedIn: false

  
  }
export default function LoginReducer(state = initialState, action){


  if (action.type === LOGIN_SUCCESSFUL) {
    return {
      ...state,
      isLoggedIn: true
    }
  }
  if(action.type === LOGOUT){
    return {
      ...state,
      isLoggedIn: false
    }
  }
  else {
    return state;
  }

}

