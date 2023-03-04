
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  fetchBookingsByUser,
  deleteBooking,
} from "../store/actions/BookingActions";
import mahindra from "../Assets/download.jpg";

function FetchBookingsByUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookingsByUser = useSelector(
    (state) => state.BookingReducer.bookingsByUser
  );
  const { userId } = useParams();
  useEffect(() => {
    dispatch(fetchBookingsByUser(userId));
  }, [userId]);
  const handleDelete = (bookingId) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      dispatch(deleteBooking(bookingId));
      navigate("/customer/CustomerDashboard");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center">
      {bookingsByUser.map((b) => (
        <div key={userId}>
          <div className="card" style={{ width: "25rem" }}>
            <img src={mahindra} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">BOOKING DETAILS</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <p>Booking Id: {b.bookingId}</p>
              </li>
              <li className="list-group-item">
                <p>Booking Date: {b.bookingDate}</p>
              </li>
              <li className="list-group-item">
                <p>Booking From Date: {b.bookingFromDate}</p>
              </li>
              <li className="list-group-item">
                <p>Booking Till Date: {b.bookingTillDate}</p>
              </li>
              {/* <li className="list-group-item">
                <p>Booking Description: {b.bookingDescription}</p>
              </li>
              <li className="list-group-item">
                <p>Booking Status: {b.bookingStatus}</p>
              </li>
              <li className="list-group-item">
                <p>Total Cost: {b.totalCost}</p>
              </li> */}
              <li className="list-group-item">
                <p>Distance: {b.distance}</p>
              </li>
              <li className="list-group-item">
                <p>Payment: {b.payment}</p>
              </li>
            </ul>

            <button
              onClick={() => {
                handleDelete(b.bookingId);
              }}
              type="button"
              class="btn btn-primary btn-block mb-4"
            >
              Cancel Booking
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FetchBookingsByUser;