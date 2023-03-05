// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllBookings } from '../store/actions/BookingActions';
// import { Link } from 'react-router-dom';

// function FetchAllBookings() {

//     const bookings = useSelector(state => state.BookingReducer.bookings);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchAllBookings());
//     }, [])

//     return (
//         <div>
//             {
//                 bookings.length > 0 &&
//                 bookings.map(b =>
//                     <div key={b.bookingId}>
//                         {b.bookingId} {b.bookingDate} {b.bookingFromDate} {b.bookingTillDate} {b.bookingDescription}{b.bookingStatus}{b.totalCost}{b.distance}{b.payment} 
//                         <Link to={`/booking/${b.bookingId}`}>View</Link>
//                         <Link to={`/deleteBooking/${b.bookingId}`}>Delete</Link>
//                     </div>)
//             }
//         </div>
//     )
// }
// export default FetchAllBookings;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookings } from '../store/actions/BookingActions';
import { Link } from 'react-router-dom';
import './ViewAllBookings.css'

function FetchAllBookings() {

    const bookings = useSelector(state => state.BookingReducer.bookings);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchAllBookings());
    }, [])

    return (
        <div>
            <div className="container">
                <h2>All Bookings</h2>

                <table className="table" style={{ width: '80%', height: '100%' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th>BookingId</th>
                            <th>BookingDate</th>
                            <th>BookingFromDate</th>
                            <th>BookingTillDate</th>
                            <th>BookingDescription</th>
                            <th>BookingStatus</th>
                            <th>Payment</th>
                            <th>TotalCost</th>
                            <th>Distance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(p =>
                            <tr key={p.bookingId}>
                                <td>{p.bookingId}</td>
                                <td>{p.bookingDate}</td>
                                <td>{p.bookingFromDate} </td>
                                <td>{p.bookingTillDate} </td>
                                <td>{p.bookingDescription}</td>
                                <td>{p.bookingStatus}</td>
                                <td>{p.payment}</td>
                                <td>{p.totalCost}</td>
                                <td>{p.distance}</td>
                                {/* <td><Link to={`/bookings/${p.bookingId}`}>View</Link></td>
                            <td><Link to={`/bookings/delete/${p.bookingId}`}>Delete</Link></td> */}
                            </tr>
                        )}
                    </tbody>
                </table>
                <div>
                    <Link to={'/admin/dashboard'} className='btn btn-primary'>Go Back</Link>
                </div>
            </div>
        </div>
    )
}
export default FetchAllBookings;