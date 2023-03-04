// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getAllUsers } from '../store/actions/UserAction';

// function FetchAllUsers() {

//     const users = useSelector(state => state.userReducer.users);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch (getAllUsers());
//     }, [])

//     return (
//         <div>
//             {
//                 users.length > 0 &&
//                 users.map(u =>
//                     <div>
//                         {u.firstName} {u.lastName} {u.emailAddress}
//                           <Link to = {`/user/${u.id}`}>View</Link>

//                     </div>)
//             }
//         </div>
//     )
// }
// export default FetchAllUsers;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtAllUsers } from '../store/actions/UserAction';
import { Link } from 'react-router-dom';


function FetchAllUsers() {

    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchtAllUsers());

    }, [])
    return (
        <div>
            <div className="container">
                <h2>Registered Users</h2>

                <table className="table" style={{ width: '80%', height: '100%' }}>

                    <thead className="thead-dark">
                        <th>UserId</th>
                        <th>Full name</th>
                        <th>EmailAddress</th>
                        <th>Role</th>
                        <th> </th>

                    </thead>
                    <tbody>
                        {
                            users.map(u =>
                                <tr>

                                    <td>{u.id}</td>
                                    <td>{u.firstName} {u.lastName}</td>
                                    <td>{u.emailAddress}</td>
                                    <td>{u.userType}</td>


                                </tr>)
                        }

                    </tbody>
                </table>
                <div>
                    <button className='btn-btn-primary'><Link to="/admin/dashboard">Go Back</Link></button>
                </div>
            </div>
        </div>
    )
}
export default FetchAllUsers;