import React from 'react';
import FetchBookingsByUser from "./FetchBookingsByUser";

const MyBookings = ({ userId }) => {
  return (
    <div>
      <h1>My Bookings</h1>
      <FetchBookingsByUser userId={userId} />
    </div>
  );
};

export default MyBookings;