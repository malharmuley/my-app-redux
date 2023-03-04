import { VEHICLE_CAT, VEHICLE_FETCH, VEHICLE_FETCH_ALL, VEHICLE_SAVE, VEHICLE_CAP } from "../../AppConsts";

const initalState={
    vehicles:[],
    vehicle:null,
    newVehicle:null,
    vecCat:[],
    vecCap: []
}
export default function VehicleReducer(state=initalState,action){
    if(action.type === VEHICLE_FETCH_ALL){
        return {
            ...state,
            vehicles:action.payload
        }
    }
    else if(action.type === VEHICLE_FETCH) {
        return {
            ...state,
            vehicles:action.payload
        }
     }
     else if(action.type === VEHICLE_SAVE) {
        return {
            ...state,
            newVehicle:action.payload
        }
     }

     else if(action.type === VEHICLE_CAT){
        return {
            ...state,
            vecCat:action.payload
        }
     }
     else if(action.type === VEHICLE_CAP){
        return {
            ...state,
            vecCap:action.payload
        }
     }
     
    else{
        return state;
    }
}