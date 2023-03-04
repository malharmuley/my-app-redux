import axios from 'axios';
import { BASE_URL, USER_FETCH_BYID, USER_FETCH_ALL, USER_SAVE  } from '../../AppConsts';

export function fetchtAllUsers() {
    return (dispatch) => {
        return axios.get(BASE_URL + "/users/getAllUser").then(
            resp => {
                dispatch({
                    type: USER_FETCH_ALL,
                    payload: resp.data
                });
            }
        )
    }
}

export function fetchUser(userId){
    return (dispatch) => {
        return axios.get(BASE_URL + "/users/"+ userId).then(
            resp => {
                dispatch({
                    type: USER_FETCH_BYID,
                    payload: resp.data
                });
            }
        )
    }

}

export function addUser(user) {
    return disptch => {
        return axios.post(BASE_URL + "/users/addUsers", user)
            .then(resp => {
                alert("user registered");
            }
            ).catch(error => {
                alert("registration Failed")
            })
    }
}