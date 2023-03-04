import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBooking } from '../store/actions/BookingActions';
function FetchBooking() {
    const booking = useSelector(state => state.BookingReducer.booking);
    const dispatch = useDispatch();
    const { bookingId } = useParams();
    useEffect(() => {
        dispatch(fetchBooking(bookingId));
    }, [bookingId])
    return (
        <div>
            {
                booking !== null &&
                <div>
                    <p>BookingId :{booking.bookingId}</p>
                    <p>BookingDate :{booking.bookingDate}</p>
                    <p>BookingFromDate :{booking.bookingFromDate}</p>
                    <p>BookingTillDate :{booking.bookingTillDate}</p>
                    <p>BookingDescription :{booking.bookingDescription}</p>
                    <p>BookingStatus :{booking.bookingStatus}</p>
                    <p>TotalCost :{booking.totalCost}</p>
                    <p>Distance :{booking.distance}</p>
                    <p>Payment :{booking.payment}</p>
                    <p>VechicleId :{booking.vehicleInfo.vehicleId}</p>
                    <p>VehicleNumber:{booking.vehicleInfo.vehicleNumber}</p>
                    <p>Type :{booking.vehicleInfo.type}</p>
                    <p>Category :{booking.vehicleInfo.category}</p>
                   
                </div>
            }
        </div>
    )
}
export default FetchBooking;