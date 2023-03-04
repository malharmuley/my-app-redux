import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../store/actions/UserAction';

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
                <div>
                    <p>User Id :{user.id}</p>
                    <p>FirstName :{user.firstName}</p>
                    <p>LastName :{user.lastName}</p>
                    <p>City :{user.address.city}</p>
                    <p>State :{user.address.state}</p>                     
                    <p>Email Address :{user.emailAddress}</p>
                  
    
                </div>
            }
        </div>
    )
}
export default FetchUser;