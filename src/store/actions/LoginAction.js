import axios from "axios";
import {
    BASE_URL,
    LOGIN_SUCCESSFUL,
    LOGOUT
} from "../../AppConsts"


export function login(payload) {
    return dispatch => {
        return axios.post(BASE_URL + LOGIN_SUCCESSFUL, payload)
            .then(resp => {
                // alert("login successful");
                const myuser = {
                    id: resp.data.id,
                    firstName: resp.data.firstName,
                    lastName: resp.data.lastName,
                    role: resp.data.userType
                }
                localStorage.setItem("myuser", JSON.stringify(myuser));

                dispatch({
                    type: LOGIN_SUCCESSFUL
                })
            }
            ).catch(error => {
                alert("login failed")
            })
    }
}

export function logout() {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    return dispatch => {
        if (myuser !== null) {
            localStorage.removeItem("myuser")
            // alert("logged out.");


            dispatch({
                type: LOGOUT
            })

        }
    }
}