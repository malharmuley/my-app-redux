
import {
  USER_FETCH_ALL,
  USER_FETCH_BYID,
  USER_SAVE
} from "../../AppConsts"

const initialState = {
  users: [],
  user: null,
  newUser: null

}

export default function UserReducer(state = initialState, action) {

  if (action.type === USER_FETCH_ALL) {
    return {
      ...state,
      users: action.payload
    }
  }

  else if(action.type === USER_FETCH_BYID) {
    return {
        ...state,
        user : action.payload
    }
  }

  else if (action.type === USER_SAVE) {
    return {
      ...state,
      newUser: action.payload
    }
  }
  else {
    return state;
  }

}