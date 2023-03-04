import axios from 'axios';
import {
    BASE_URL,
    VEHICLE_FETCH_ALL,
    VEHICLE_FETCH,
    VEHICLE_SAVE,
    VEHICLE_CAT,
    VEHICLE_CAP
} from '../../AppConsts';
export function fetchAllVehicles() {
    return (dispatch) => {
        return axios.get(BASE_URL+"/vehicles/viewAllvehicles").then(
            resp => {
                dispatch({
                    type:VEHICLE_FETCH_ALL,
                    payload: resp.data
                });
            }
        )
    }
}
export function viewVehicles(vehicleId) {
    return (dispatch) => {
        return axios.get(BASE_URL+"/vehicles/bookingByVehicleId/"+vehicleId).then(
            resp => {
                dispatch({
                    type: VEHICLE_FETCH,
                    payload: resp.data

                });
            }
        )
    }
}
export function addVehicle(vehicle) {
    return (dispatch) => {
        return axios.post(BASE_URL+"/vehicles/addvehicles",vehicle)
        .then(resp => {
                alert("vehicle added.");
               // dispatch({
                    //type: "VEHICLE_SAVE",
                    //payload: resp.data

                //})
            }
        ).catch(error =>{
            alert("vehicle not added.");
        })
    }
}
export function fetchVehicleByCat(category) {
    return (dispatch) => {
        return axios.get(BASE_URL+"/vehicles/cat/"+category).then(
            resp => {
                dispatch({
                    type: VEHICLE_CAT,
                    payload: resp.data

                });
            }
        )
    }
}
export function fetchVehicleByCap(capacity) {
    return (dispatch) => {
        return axios.get(BASE_URL+"/vehicles/cap/"+capacity).then(
            resp => {
                dispatch({
                    type: VEHICLE_CAP,
                    payload: resp.data

                });
            }
        )
    }
}