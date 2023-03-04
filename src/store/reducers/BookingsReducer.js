import { BOOKING_FETCH, BOOKING_FETCH_ALL, BOOKING_SAVE,BOOKING_FETCH_BY_USER,DELETE_BOOKING } from "../../AppConsts";

const initalState={
    bookings:[],
    booking:null,
    newBooking:null,
    bookingsByUser:[],
    deleteBooking:null
}

export default function BookingReducer(state=initalState,action){
    if(action.type === BOOKING_FETCH_ALL){
        return {
            ...state,
            bookings:action.payload
        }
    }
    else if(action.type === BOOKING_FETCH) {
        return {
            ...state,
            booking:action.payload
        }
     }
     else if(action.type === BOOKING_SAVE) {
        return {
            ...state,
            newBooking:action.payload
        }
     }
     else if(action.type === BOOKING_FETCH_BY_USER) {
        return {
            ...state,
            bookingsByUser:action.payload
        }
     }
     else if(action.type === DELETE_BOOKING) {
        return {
            ...state,
            deleteBooking:action.payload
        }
     }
    else{
        return state;
    }
}