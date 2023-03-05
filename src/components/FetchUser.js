import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../store/actions/UserAction';
import { Link } from 'react-router-dom';

import car from '../Assets/user.jpg';

function FetchUser() {
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [userId])

    return (
        <div>
            {

                user !== null &&
                <div className="as">
                    <div className="card col-2" style={{ width: '800px' }}>
                        <img class="card-img-top" src={car} alt="Card image"
                        />

                        <div class="card-body" >
                            <p class="card-title"><b>User Id :</b>{user.id}</p>
                            <p class="card-title"><b>FirstName :</b>{user.firstName}</p>
                            <p class="card-title"><b>LastName :</b>{user.lastName}</p>
                            <p class="card-title"><b>City :</b>{user.address.city}</p>
                            <p class="card-title"><b>State :</b>{user.address.state}</p>
                            <p class="card-title"><b>Email Address :</b>{user.emailAddress}</p>
                        </div>
                        {/* <div> */}
                            <Link to={'/customer/dashboard'} className='btn btn-primary'>Go Back</Link>
                        {/* </div> */}
                    </div>
                </div>
            }
        </div>
    )
}
export default FetchUser;