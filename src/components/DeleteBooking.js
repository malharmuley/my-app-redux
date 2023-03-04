import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBooking,
  fetchBooking,
} from "../store/actions/BookingActions";

function DeleteBooking() {
  const { bookingId } = useParams();
  const booking = useSelector((state) => state.BookingReducer.booking);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchBooking(bookingId));
  }, [dispatch, bookingId]);

  const handleDelete = () => {
    dispatch(deleteBooking(bookingId));

    navigate("/bookings/all");
  };
  return (
    <div>
      {booking !== null && (
        <div>
          <h2>Booking Details</h2>
          <p>BookingId :{booking.bookingId}</p>
          <p>BookingDate :{booking.bookingDate}</p>
          <p>BookingFromDate :{booking.bookingFromDate}</p>
          <p>BookingTillDate :{booking.bookingTillDate}</p>
          <p>BookingDescription :{booking.bookingDescription}</p>
          <p>BookingStatus :{booking.bookingStatus}</p>
          <p>TotalCost :{booking.totalCost}</p>
          <p>Distance :{booking.distance}</p>
          <p>Payment :{booking.payment}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
export default DeleteBooking;