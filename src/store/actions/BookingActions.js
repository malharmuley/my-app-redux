import axios from 'axios';
import {
    BASE_URL,
    BOOKING_FETCH_ALL,
    BOOKING_FETCH,
    BOOKING_SAVE,
    BOOKING_FETCH_BY_USER,
    DELETE_BOOKING
} from '../../AppConsts';
export function fetchAllBookings() {
    return (dispatch) => {
        return axios.get(BASE_URL+"/bookings/getBooking").then(
            resp => {
                dispatch({
                    type:BOOKING_FETCH_ALL,
                    payload: resp.data
                });
            }
        )
    }
}
export function fetchBooking(bookingId) {
    return (dispatch) => {
        return axios.get(BASE_URL+"/bookings/BookingById/"+bookingId).then(
            resp => {
                dispatch({
                    type: BOOKING_FETCH,
                    payload: resp.data

                });
            }
        )
    }
}
export function addBooking(booking) {
    return (dispatch) => {
        return axios.post(BASE_URL+"/bookings/addBooking",booking)
        .then(resp => {
                alert("booking added.");
            }
        ).catch(error =>{
            alert("booking not added.");
        })
    }
}
export function fetchBookingsByUser(userId) {
    return (dispatch) => {
      return axios.get(BASE_URL + '/bookings/GetBookingByUser/' + userId).then(
        resp => {
          dispatch({
            type: BOOKING_FETCH_BY_USER,
            payload: resp.data
          });
        }
      )
    }
  }
export function deleteBooking(bookingId){
    return (dispatch) => {
        return axios.delete(BASE_URL+"/bookings/DeleteBookingById/"+bookingId).then(
            resp => {
                alert("Booking Canceled");
                
            } ).catch(error =>{
                alert("Booking not canceled")
            })
    }

    
}